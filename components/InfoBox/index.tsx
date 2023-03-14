import ApplicationsIcon from "../UI/Iconography/ApplicationsIcon";
import StudentsIcon from "../UI/Iconography/StudentsIcon";
import WarningIcon from "../UI/Iconography/WarningIcon";
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
            case "naCekanju":
                return <WarningIcon />;
            case "brojStudenata":
                return <StudentsIcon />;
            case "brojPraksi":
                return <ApplicationsIcon />;
            default:
                break;
        }
    };
    return (
        <InfoBoxStyled type={type}>
            <div className="type-icon">{iconDisplay()}</div>
            <p className="number">{number}</p>
            <p className="label">{label}</p>
        </InfoBoxStyled>
    );
};

export default InfoBox;
