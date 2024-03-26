
const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}> What I did so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>

            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (<ExperienceCard key={index} experience={experience} />))}

                </VerticalTimeline>

            </div>
        </>

    )
}

export default SectionWrapper(Education, "Academics") 