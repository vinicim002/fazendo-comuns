import { HeroSection } from '@/features/home/components/HeroSection'
import { MainTitleSection } from '@/features/home/components/MainTitleSection'
import { BubblesSection } from '@/features/home/components/BubblesSection'
import { EditorialsNewsSection } from '@/features/home/components/EditorialsNewsSection'
import { EventsSection } from '@/features/home/components/EventsSection'
import { FeatureCardsSection } from '@/features/home/components/FeatureCardsSection'
import { HomeFooter } from '@/components/layout/HomeFooter'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MainTitleSection />
      <BubblesSection />
      <EditorialsNewsSection />
      <EventsSection />
      <FeatureCardsSection />
      <HomeFooter />
    </>
  )
}
