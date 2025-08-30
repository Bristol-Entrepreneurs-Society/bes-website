import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative py-20 sm:py-28">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.08),transparent_60%)]"
          aria-hidden="true"
        />
        <Container className="text-center">
          <div className="mx-auto mb-8 flex flex-col items-center">
            <Image src="/bes-logo.png" alt="BES logo" width={80} height={80} priority />
            <span className="sr-only">Bristol Entrepreneurs Society</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Bristol <span className="text-red-600">Entrepreneurs</span> Society
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Fostering innovation, startup collaboration, and entrepreneurial spirit at the University of Bristol
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/events"><Button variant="primary">Join Our Events</Button></Link>
            <Link href="/resources"><Button variant="secondary">Learn More</Button></Link>
          </div>
        </Container>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-16 border-t border-neutral-200">
        <Container>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <p className="mt-2 text-neutral-600">Talks, workshops, and socials for builders.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Founder Fireside', date: 'Oct 10', where: 'Tyndall Theatre' },
              { title: 'MVP Sprint Night', date: 'Oct 17', where: 'Hillside Hub' },
              { title: 'Funding 101', date: 'Oct 24', where: 'Priory Rd' },
            ].map((e, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition-all">
                <div className="text-sm text-neutral-500">{e.date} • {e.where}</div>
                <div className="mt-1 text-xl font-semibold">{e.title}</div>
                <Link href="/events" className="mt-4 inline-block text-red-600 hover:underline">View details →</Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/events"><Button variant="outline">See all events</Button></Link>
          </div>
        </Container>
      </section>

      {/* RESOURCES */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Resources</h2>
            <p className="mt-2 text-neutral-600">Starter guides, tools, and funding links.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Startup Guide', desc: 'Idea → MVP → Launch', href: '/resources' },
              { title: 'Funding Map', desc: 'Grants, angels, and competitions', href: '/resources' },
              { title: 'Tools Stack', desc: 'Design, dev, analytics, AI', href: '/resources' },
            ].map((r, i) => (
              <Link key={i} href={r.href} className="rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition-all">
                <div className="text-xl font-semibold">{r.title}</div>
                <div className="mt-2 text-neutral-600">{r.desc}</div>
                <div className="mt-4 text-red-600">Open →</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ABOUT / CTA */}
      <section className="py-16">
        <Container className="text-center">
          <h2 className="text-3xl font-bold">About BES</h2>
          <p className="mx-auto mt-2 max-w-2xl text-neutral-600">
            We’re a student community helping founders meet co-builders, get practical skills,
            and ship projects. Run by students, open to all disciplines.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/committee"><Button variant="primary">Meet the Committee</Button></Link>
            <Link href="/contact"><Button variant="outline">Get in touch</Button></Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
