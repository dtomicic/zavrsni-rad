import ApplicationsIcon from "../UI/Iconography/ApplicationsIcon";
import StudentsIcon from "../UI/Iconography/StudentsIcon";
import WarningIcon from '../UI/Iconography/WarningIcon'
import { InfoBoxStyled } from "./style";

interface IInfoBoxProps {
    type: string;
    number: number;
    label: string;
}

const InfoBox = (props: IInfoBoxProps) => {
    const { type, number, label } = props;

    const iconDisplay = () => {
        switch (type) {
            case 'naCekanju':
                return <WarningIcon />;
            case 'brojStudenata':
                return <StudentsIcon />;
            case 'brojPraksi':
                return <ApplicationsIcon />
            default:
                break;
        }
    }
    return (
        <InfoBoxStyled>
            <div className="type-icon">
                {iconDisplay()}
            </div>
        </InfoBoxStyled>
    );
};

export default InfoBox;
