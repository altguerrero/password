import { useGeneratePassword } from "../hooks";

export const PasswordManager = () => {
  const { length, password, setLength, handleGeneratePassword } =
    useGeneratePassword();

  return (
    <div className="password-manager">
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        max="24"
        min="4"
      />

      <div className="actions">
        <button onClick={() => handleGeneratePassword(true, false)}>
          Agregar Números
        </button>

        <button onClick={() => handleGeneratePassword(false, false)}>
          Generar Contraseña
        </button>

        <button onClick={() => handleGeneratePassword(true, true)}>
          Agregar Caracteres Especiales
        </button>
      </div>

      <p>Contraseña Generada: {password}</p>
    </div>
  );
};
