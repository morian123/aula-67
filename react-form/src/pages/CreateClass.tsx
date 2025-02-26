import { Controller } from "react-hook-form";
import { Typography, Layout, Form, Input, Button } from "antd";
import { useForm } from "react-hook-form";
import IClass from "../interfaces/IClass";
const { Title } = Typography;
const { Content } = Layout;
const { Item } = Form;

function CreatClass() {
  const {
    control,
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
    <Content>
      <Title level={2}>Criar novas salas</Title>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Item
          label="Nome do cursor"
          name="name"
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: "Nome obrigatório" }}
            render={(field) => <Input {...field} />}
          />
        </Item>
        <Item
          label="Nome do laboratorio"
          name="room"
          validateStatus={errors.room ? "error" : ""}
          help={errors.room?.message}
        >
          <Controller
            name="room"
            control={control}
            rules={{ required: "Sala obrigatoria" }}
            render={(field) => <Input {...field} />}
          />
        </Item>
        <Item
          label="Capacidade"
          name="capacity"
          validateStatus={errors.capacity ? "error" : ""}
          help={errors.capacity?.message}
        >
          <Controller
            name="capacity"
            control={control}
            rules={{ required: "Capacidade Obrigatoria" }}
            render={(field) => <Input {...field} />}
          />
        </Item>
        <Item
          label="Dia da aula"
          name="day"
          validateStatus={errors.day ? "error" : ""}
          help={errors.day?.message}
        >
          <Controller
            name="day"
            control={control}
            rules={{ required: "Dia obrigatorio" }}
            render={(field) => <Input {...field} />}
          />
        </Item>
        <Item
          label="Hora da aula"
          name="hour"
          validateStatus={errors.hour ? "error" : ""}
          help={errors.hour?.message}
        >
          <Controller
            name="hour"
            control={control}
            rules={{ required: "Hora obrigatoria" }}
            render={(field) => <Input {...field} />}
          />
        </Item>
        <Button htmlType="submit">Criar</Button>
      </Form>
    </Content>
  );
}

export default CreatClass;
