import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          I'm a passionate full-stack web developer with 4 years of experience in crafting innovative and efficient web applications. My expertise spans across a wide range of technologies, including TypeScript, Golang, PHP, React, Vue, and Tailwind CSS. I possess a strong foundation in both back-end and front-end development, allowing me to deliver comprehensive solutions that meet the highest standards of quality and performance.
        </p>

        <br />

        <p>
          I am skilled in designing and implementing scalable architectures, optimizing code for performance, and ensuring seamless user experiences. I have a keen eye for detail and a passion for staying up-to-date with the latest industry trends. I am confident in my ability to contribute to your team and deliver exceptional results.
        </p>

        <br />

        <p>
          Let's collaborate to build remarkable web applications that exceed your expectations.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
