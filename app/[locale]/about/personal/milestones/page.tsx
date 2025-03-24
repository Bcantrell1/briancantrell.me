'use client';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { useTranslations } from 'next-intl';
import styles from './milestones.module.scss';
import 'react-vertical-timeline-component/style.min.css';

import {
    School,
    Code,
    CheckSquare,
    ArrowRightLeft,
    GraduationCap,
    Heart,
    Briefcase,
    Brain,
} from 'lucide-react';

export default function MilestonesPage() {
    const t = useTranslations('AboutPage.personal.milestones');

    const milestones = [
        {
            year: '2018',
            icon: <School color="#80FFDB" />,
            description: 'Starting university',
        },
        {
            year: '2019',
            icon: <Code color="#008000" />,
            description: 'First dev job',
        },
        {
            year: '2020',
            icon: <CheckSquare color="#FEA55F" />,
            description: 'Completed project',
        },
        {
            year: '2021',
            icon: <ArrowRightLeft color="#A5F1CD" />,
            description: 'Career transition',
        },
        {
            year: '2022',
            icon: <GraduationCap color="#FFD166" />,
            description: 'Graduation',
        },
        {
            year: '2023',
            icon: <Heart color="#FF6B6B" />,
            description: 'Marriage',
        },
        {
            year: '2024',
            icon: <Briefcase color="#9381FF" />,
            description: 'Software Engineer position',
        },
        {
            year: '2025',
            icon: <Brain color="#C98BDF" />,
            description: 'Continued learning',
        },
    ];

    return (
        <div className={styles.milestonesContainer}>
            <div className={styles.milestonesContent}>
                <h1>{t('title')}</h1>
                <p>{t('description')}</p>

                <VerticalTimeline
                    className={styles.customTimeline}
                    lineColor="#1e2d3d"
                >
                    {milestones.map(milestone => (
                        <VerticalTimelineElement
                            key={milestone.year}
                            className={styles.timelineElement}
                            contentStyle={{
                                background: '#001221',
                                border: '2px solid #1e2d3d',
                                color: '#000',
                                borderRadius: '5px',
                                boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)',
                            }}
                            contentArrowStyle={{
                                borderRight: '7px solid #1e2d3d',
                            }}
                            date={t(`${milestone.year}.title`)}
                            iconStyle={{ background: '#001221', color: '#fff' }}
                            icon={milestone.icon}
                        >
                            <h3 className={styles.timelineTitle}>
                                {t(`${milestone.year}.subTitle`)}
                            </h3>
                            <p>{t(`${milestone.year}.description`)}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
}
