-- Run in the Supabase SQL editor.
create table if not exists public.scans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  input text not null,
  result jsonb not null,
  score int not null,
  created_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  plan text not null check (plan in ('p47','p57','p97')),
  status text not null default 'inactive' check (status in ('active','inactive','cancelled')),
  updated_at timestamptz not null default now()
);

alter table public.scans enable row level security;
alter table public.subscriptions enable row level security;

create policy "own scans select" on public.scans for select using (auth.uid() = user_id);
create policy "own scans insert" on public.scans for insert with check (auth.uid() = user_id);
create policy "own scans delete" on public.scans for delete using (auth.uid() = user_id);
-- Users can only READ their subscription. Activate plans from the dashboard/service role after verifying payment.
create policy "own subscription select" on public.subscriptions for select using (auth.uid() = user_id);

create index if not exists scans_user_created on public.scans (user_id, created_at desc);

-- Contact / demo requests. Anyone may submit; nobody can read via the public API.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  company text not null,
  message text not null default '',
  created_at timestamptz not null default now()
);
alter table public.leads enable row level security;
create policy "anyone can submit lead" on public.leads for insert to anon, authenticated with check (true);
