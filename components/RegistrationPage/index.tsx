import { RegistrationStyled } from "./style";
import Image from "next/image";
import FormInput from "../FormInput";
import Link from "next/link";

interface RegistrationPageProps {
  email: string;
  password: string;
  handleEmailChange: (value: string) => void;
  handlePasswordChange: (value: string) => void;
}

const RegistrationPage = (props: RegistrationPageProps) => {
    const { email, password, handleEmailChange, handlePasswordChange } = props;
  return (
    <RegistrationStyled>
      <Image src="/images/logo.png" alt="Veleri Logo" width={292} height={74} />
      <form>
        <div className="input-container">
          <FormInput
            label={"Email"}
            value={email}
            placeholder={"Unesite email adresu"}
            type={"email"}
            onChange={handleEmailChange}
            errorMessage={""}
          />
          <FormInput
            label={"Lozinka"}
            value={password}
            placeholder={"Unesite lozinku"}
            type={"password"}
            onChange={handlePasswordChange}
            errorMessage={""}
          />
        </div>
        <p>
          Već ste registrirani?{" "}
          <Link href="/prijava">
            <b>Prijavite se</b>
          </Link>
        </p>
        <button type="submit">Registracija</button>
      </form>
    </RegistrationStyled>
  );
};

export default RegistrationPage;