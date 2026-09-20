CREATE TABLE public.artwork_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  remarks TEXT,
  artwork_title TEXT NOT NULL,
  artwork_slug TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.artwork_inquiries TO anon;
GRANT INSERT ON public.artwork_inquiries TO authenticated;
GRANT ALL ON public.artwork_inquiries TO service_role;

ALTER TABLE public.artwork_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry" ON public.artwork_inquiries
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);