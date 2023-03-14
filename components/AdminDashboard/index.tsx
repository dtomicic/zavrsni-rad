import Link from "next/link";
import InfoBox from "../InfoBox";
import { AdminDashboardStyled } from "./style";

const AdminDashboard = () => {
    return (
        <AdminDashboardStyled>
            <h1>Dobrodošli</h1>
            <div className="info-boxes-container">
                <Link href="/admin/prijave">
                    <InfoBox
                        type={"naCekanju"}
                        number={20}
                        label={"Prijava na čekanju"}
                    />
                </Link>
                <Link href="/admin/studenti">
                    <InfoBox
                        type={"brojStudenata"}
                        number={125}
                        label={"Studenata"}
                    />
                </Link>
                <Link href="/admin/prakse">
                    <InfoBox
                        type={"brojPraksi"}
                        number={35}
                        label={"Prijavljenih praksi"}
                    />
                </Link>
            </div>
            <div>
                <h1>Prijave</h1>
            </div>
        </AdminDashboardStyled>
    );
};

export default AdminDashboard;
