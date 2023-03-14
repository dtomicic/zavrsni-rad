import InfoBox from "../InfoBox";
import { AdminDashboardStyled } from "./style";

const AdminDashboard = () => {
    return (
        <AdminDashboardStyled>
            <h1>Dobrodošli</h1>
            <InfoBox type={'naCekanju'} number={20} label={'Prijava na cekanju'} />
        </AdminDashboardStyled>
    );
};

export default AdminDashboard;
