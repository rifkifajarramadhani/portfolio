import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Rifki Fajar Ramadhani</h1>
      <p className="mt-2 text-lg sm:text-xl">Full-Stack Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Hi, my name is Rifki, software engineer based in Indonesia. I'm a passionate full-stack web developer with 4 years of experience in crafting innovative and efficient web applications. My expertise spans across a wide range of technologies, including TypeScript, Golang, PHP, React, Vue, and Tailwind CSS.</p>
      </div>

      <Links />
    </div>
  )
}
