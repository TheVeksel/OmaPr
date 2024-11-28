import "./LoginModal.scss";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginModalProps {
  onClose: () => void;
}

interface FormData {
  emailAddress: string;
  password: string;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Submitted Data:", data);
    onClose(); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button
          className="modal__closebutton"
          onClick={onClose}
          style={{ float: "right" }}
        >
          X
        </button>
        <h1 className="modal__heading">Tervetuloa!</h1>
        <p className="modal__text">Kirjaudu sisään Yle Tunnuksella.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="modal__input">
            <label className="label" htmlFor="emailAddress">
              Sähköposti
            </label>
            <input
              id="emailAddress"
              className="modal__input"
              type="email"
              placeholder="example@post.com"
              {...register("emailAddress", {
                required: "Sähköposti on pakollinen",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Virheellinen sähköpostiosoite"
                }
              })}
            />
            {errors.emailAddress && (
              <p className="error-text">{errors.emailAddress.message}</p>
            )}
          </fieldset>
          <fieldset className="modal__input">
            <label className="label" htmlFor="password">
              Salasana
            </label>
            <input
              id="password"
              className="modal__input"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Salasana on pakollinen",
                minLength: {
                  value: 6,
                  message: "Salasanan tulee olla vähintään 6 merkkiä pitkä"
                }
              })}
            />
            {errors.password && (
              <p className="error-text">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="login-button" type="submit">
            Kirjaudu sisään
          </button>
        </form>
      </div>
    </div>
  );
}
