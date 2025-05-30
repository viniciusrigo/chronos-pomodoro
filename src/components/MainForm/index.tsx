import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaulfButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
    return (
        <form action="" className="form">
            <div className="formRow">
                <DefaultInput type="text" id="meuInput" labelText="Task" placeholder="Digite algo" />
            </div>
            <div className="formRow">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="formRow">
                <Cycles />
            </div>
            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>
        </form>
    );
}
