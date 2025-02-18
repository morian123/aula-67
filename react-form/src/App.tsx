import { useForm } from "react-hook-form";

import ClassCard from "./components/classCard";
import turmas from "./mocks/turmas.json";
import IClass from "./interfaces/IClass";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<IClass>>();

  const onSubmit = (data: Partial<IClass>) => {
    console.log("Dados enviados: ", {
      ...data,
      capacity: Number(data.capacity),
      hour: String(data.hour),
    });
  };

  return (
    <>
      <header>
        <a href="/">Turmas</a>
      </header>
      <main>
        <h1>Turmas</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label htmlFor="name">Nome do curso</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Nome obrigatório" })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </fieldset>

          <fieldset>
            <label htmlFor="room">Laboratório</label>
            <input
              type="text"
              id="room"
              {...register("room", {
                required: "Nome do laboratório obrigatório",
              })}
            />
            {errors.room && <p>{errors.room.message}</p>}
          </fieldset>

          <fieldset>
            <label htmlFor="capacity">Capacidade máxima</label>
            <input
              type="number"
              id="capacity"
              {...register("capacity", { required: "Capacidade obrigatória" })}
            />
            {errors.capacity && <p>{errors.capacity.message}</p>}
          </fieldset>

          <fieldset>
            <label htmlFor="day">Dia</label>
            <input
              type="text"
              id="day"
              {...register("day", { required: "Dia obrigatório" })}
            />
            {errors.day && <p>{errors.day.message}</p>}
          </fieldset>

          <fieldset>
            <label htmlFor="hour">Hora</label>
            <input
              type="time"
              id="hour"
              {...register("hour", { required: "Hora obrigatória" })}
            />
            {errors.hour && <p>{errors.hour.message}</p>}
          </fieldset>

          <button type="submit">Criar</button>
        </form>
        <section>
          {turmas.map((turma) => (
            <ClassCard key={turma.id} turma={turma} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
