import {
  type IconType,
  SiAmazonwebservices,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Front-End',
      skills: [
        { skill: 'HTML5', icon: SiHtml5 },
        { skill: 'CSS3', icon: SiCss3 },
        { skill: 'JavaScript', icon: SiJavascript },
        { skill: 'TypeScript', icon: SiTypescript },
        { skill: 'React', icon: SiReact },
        { skill: 'Vue', icon: SiVuedotjs },
        { skill: 'ShadCN', icon: SiShadcnui },
        { skill: 'SASS', icon: SiSass },
        { skill: 'Tailwind', icon: SiTailwindcss },
        { skill: 'Bootstrap', icon: SiBootstrap, },
      ],
    },
    {
      field: 'Back-End',
      skills: [
        {
          skill: 'Golang',
          icon: SiGo,
        },
        {
          skill: 'NodeJS',
          icon: SiNodedotjs,
        },
        {
          skill: 'PHP',
          icon: SiPhp,
        },
        {
          skill: 'NestJS',
          icon: SiNestjs,
        },
        {
          skill: 'AWS',
          icon: SiAmazonwebservices,
        },
        {
          skill: 'Redis',
          icon: SiRedis,
        },
        {
          skill: 'PostgreSQL',
          icon: SiPostgresql,
        },
        {
          skill: 'MongoDB',
          icon: SiMongodb,
        },
        {
          skill: 'MySQL',
          icon: SiMysql,
        },
        {
          skill: 'Docker',
          icon: SiDocker,
        },
      ],
    },
  ]

export default SKILLS
