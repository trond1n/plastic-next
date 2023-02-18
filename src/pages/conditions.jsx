import ConditionsBlock from '@/components/Conditions/ConditionsBlock';
import BlockTitle from '@/components/UI/BlockTitle/BlockTitle';
import React from 'react';

const OrderСonditions = () => {
  return (
    <div style={{ maxWidth: '80%', margin: '0 auto', padding: '40px 0' }}>
      <BlockTitle title="Условия заказа" />
      <ConditionsBlock
        title="Для расчета стоимости изготовления партии пластиковых изделий вам необходимо предоставить следующую информацию:"
        conditions={[
          'фото, картинку, чертеж, математическую модель* необходимого изделия',
          'габаритные размеры (ВхШхГ в мм.)',
          'вес или объем в см3',
          'требования к материалу, фактуре поверхностей (матовая, мелкий или крупный песок, глянцевая),цвету и т.д.',
          'количество (шт.)',
        ]}
      />
      <ConditionsBlock
        title="Для расчета стоимости изготовления изделия методом 3D печати необходимо предоставить:"
        conditions={[
          'математическую модель*',
          'описание назначение изделия для подбора оптимальной технологии 3D печати',
        ]}
      />
      <p style={{ color: '#bf0000', fontSize: '18px', margin: '0 auto', textAlign: 'center' }}>
        *Математические модели принимаем в следующих форматах: *.STL, *.STP, *.STEP, *.SLDPRT,
        *.SLDASM, *.IGS, *.IGES, *.MAX, *.3DS .
      </p>
      <p style={{ fontSize: '15px', margin: '0 auto', textAlign: 'center', paddingTop: '80px' }}>
        После предоставления описанной выше информации мы проводим оценку возможности изготовления,
        и в кратчайшие сроки вы получаете расчет в виде коммерческого предложения.
      </p>
      <p
        style={{
          maxWidth: '70%',
          fontWeight: '600',
          fontSize: '16px',
          margin: '0 auto',
          textAlign: 'center',
          paddingTop: '20px',
        }}>
        Вы всегда можете связаться с нами для предоставления подробной информации, а также уточнения
        возникающих вопросов. Направлять информацию вы можете на нашу электронную почту
        info@ortoplast.ru или через форму обратной связи.
      </p>
    </div>
  );
};

export default OrderСonditions;
