import CardCategorie from '@/components/molecules/cards/cardCategorie'
import ShowAll from '@/components/atomes/header/showAll'
import TitleLeft from '@/components/atomes/header/titleLeft'
import HomeHeader from '@/components/molecules/header/homeHeader'
import { Icons } from '@/utils/assets/Icons'
import React from 'react'

type Props = {}

function Categories({ }: Props) {

    return (
        <div className='h-[90vh] bg-[#fff] flex flex-col px-8 md:px-12 '>

            {/* Section title bar */}
            <HomeHeader titleTextOne='Explore by' titleTextTwo='categories' showAllText='Show all jobs' />

            {/* Content */}
            <div className='my-8 grid grid-cols-2 px-0 md:px-0 md:grid-cols-4 md:grid-rows-2 gap-16 grid-flow-row'>
                <CardCategorie imageUrl={Icons.design.src} name="Design" numberJobs={12} />
                <CardCategorie imageUrl={Icons.sales.src} name="Sales" numberJobs={12} />
                <CardCategorie imageUrl={Icons.marketing.src} name="Marketing" numberJobs={12} />
                <CardCategorie imageUrl={Icons.finance.src} name="Finance" numberJobs={12} />
                <CardCategorie imageUrl={Icons.technologie.src} name="Technologie" numberJobs={12} />
                <CardCategorie imageUrl={Icons.engineering.src} name="Engineering" numberJobs={12} />
                <CardCategorie imageUrl={Icons.business.src} name="Business" numberJobs={12} />
                <CardCategorie imageUrl={Icons.humanRessource.src} name="humanRessource" numberJobs={12} />
            </div>
        </div>
    )
}

export default Categories