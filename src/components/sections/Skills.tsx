import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SKILLS from '@/data/skills'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { cn } from '@/lib/utils'

export default function Skills() {
  const [active, setActive] = useState(0)
  const current = SKILLS[active]

  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionHeading num="02" title="Technologies I Work With" />
      </Reveal>

      <Reveal>
        <div className="mb-8 flex flex-wrap gap-4 font-mono text-sm text-text-secondary/80">
          {SKILLS.map((group, id) => (
            <button
              key={group.field}
              onClick={() => setActive(id)}
              className={cn(
                'border-b-2 px-2 pb-1 transition-colors',
                active === id
                  ? 'border-accent-1 text-accent-1'
                  : 'border-transparent hover:text-text-primary',
              )}
            >
              {group.field}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.field}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
          >
            {current.skills.map(({ skill, icon: Icon }) => (
              <div
                key={skill}
                className="group flex flex-col items-center gap-3 rounded-lg border border-white/5 bg-secondary-bg/40 p-5 backdrop-blur-sm transition-colors hover:border-accent-1/40"
              >
                <Icon
                  className="h-9 w-9 text-text-secondary transition-colors group-hover:text-accent-1"
                  title=""
                />
                <span className="text-sm text-text-secondary">{skill}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Reveal>
    </section>
  )
}
