import "./Instructions.css";

interface InstructionsProps{
    instructions: string;
}

function Instructions(instructions: InstructionsProps): JSX.Element {
    return (
        <div className="Instructions">
			<h2>Instructions</h2>
            <p>{instructions.instructions}</p>
        </div>
    );
}

export default Instructions;
