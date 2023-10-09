import { useState } from "react";
import { useEffect } from "react";
import Teacher from "../Teacher/Teacher";

const Teachers = () => {

    // data load form json
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('/team.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    // end

    return (
        <div className="lg:mx-24 md:mx-16 mx-10">
            {/* Teachers heading */}
            <div className="my-16">
                <h3 className="md:text-2xl text-xl font-bold text-center text-primary capitalize mb-2">Our Professionals</h3>
                <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center">Meet our <span className="text-secondary">Team</span></h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1  gap-6">
                {
                    teachers.map(teacher => <Teacher key={teacher.id} teacher={teacher}></Teacher>)
                }
            </div>


        </div>
    );
};

export default Teachers;