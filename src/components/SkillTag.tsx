interface SkillTagProps {
    skill: string;
}

export default function SkillTag({ skill }: SkillTagProps) {
    return (
        <span className="inline-block bg-green-500 border-2 border-black px-3 py-1 text-sm font-bold hover:bg-green-600 hover:transform hover:-translate-y-0.5 transition-all cursor-default">
            {skill}
        </span>
    );
}
