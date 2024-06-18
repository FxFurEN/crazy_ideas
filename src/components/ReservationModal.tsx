import { useState } from "react";
import { Modal, Input, Button, notification, Form, Card, Select, DatePicker } from "antd";
import { createClient } from "@supabase/supabase-js";

const { Option } = Select;

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface ReservationFormValues {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  timeReserved: Date;
}

const ReservationModal = ({ visible, onCancel }: { visible: boolean; onCancel: () => void }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const handleFinish = async (values: ReservationFormValues) => {
    setConfirmLoading(true);
    const { fullName, phone, email, serviceType, timeReserved } = values;

    try {
      // Example of SQL INSERT statement
      const { data, error } = await supabase
        .from('delivery_table')
        .insert([
          { full_name: fullName, phone, email, service_type: serviceType, time_reserved: timeReserved }
        ]);

      if (error) {
        throw error;
      }

      notification.success({
        message: 'Успешно',
        description: 'Ваше бронирование успешно зарегистрировано.',
      });

      console.log('Data inserted successfully:', data);
    } catch (error) {
      console.error('Error inserting data:', error);
      notification.error({
        message: 'Ошибка',
        description: 'Произошла ошибка при бронировании. Пожалуйста, попробуйте снова.',
      });
    }

    setConfirmLoading(false);
    onCancel();
  };

  return (
    <Modal
      title="Обратная связь"
      open={visible}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={() => form.submit()} loading={confirmLoading} className="bg-gray-500 text-black border-0">
          Забронировать
        </Button>
      ]}
    >
      <Card className="w-full rounded-lg">
        <Form
          form={form}
          name="reservationForm"
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            name="fullName"
            label="ФИО"
            rules={[{ required: true, message: 'Пожалуйста, введите ваше ФИО!' }]}
          >
            <Input placeholder="Введите ваше ФИО" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Номер телефона"
            rules={[{ required: true, message: 'Пожалуйста, введите ваш номер телефона!' }]}
          >
            <Input placeholder="Введите ваш номер телефона" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Почта"
            rules={[{ required: true, message: 'Пожалуйста, введите вашу почту!' }]}
          >
            <Input placeholder="Введите вашу почту" />
          </Form.Item>

          <Form.Item
            name="serviceType"
            label="Тип услуги"
            rules={[{ required: true, message: 'Пожалуйста, выберите тип услуги!' }]}
          >
            <Select placeholder="Выберите тип услуги">
              <Option value="Полная Комплектация">Полная Комплектация</Option>
              <Option value="Ваша Идея">Ваша Идея</Option>
              <Option value="Фотозона">Фотозона</Option>
              <Option value="Фотостудия">Фотостудия</Option>
              <Option value="Семейная Фотоссесия">Семейная Фотоссесия</Option>
              <Option value="Повседневная фотоссесия">Повседневная фотоссесия</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="timeReserved"
            label="Дата бронирования"
            rules={[{ required: true, message: 'Пожалуйста, выберите дату бронирования!' }]}
          >
            <DatePicker
              showTime
              placeholder="Выберите дату бронирования"
            />
          </Form.Item>
        </Form>
      </Card>
    </Modal>
  );
};

export default ReservationModal;
