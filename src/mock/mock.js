export const MOCK_COMMENTS = [{
  name: `Борис Иванов`,
  merit: `мощность, внешний вид`,
  flaw: `Слабые тормозные колодки (пришлось заменить)`,
  rating: `4`,
  comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`,
  date: `2021-02-23T15:22:49+03:00`,
},
{
  name: `Марсель Исмагилов`,
  merit: `Cтиль, комфорт, управляемость`,
  flaw: `Дорогой ремонт и обслуживание`,
  rating: `2`,
  comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`,
  date: `2021-02-23T15:22:49+03:00`,
}]

export const MOCK_CAR = {
  name: `Марпех 11`,
  features: [`бензин`, `механика`, `100 л.с.`, `1.4 л`],
  detailFeatures: [
    {
      type: `Трансмиссия`,
      description: `Роботизированная`
    },
    {
      type: `Мощность двигателя, л.с.`,
      description: `249`
    },
    {
      type: `Тип двигателя`,
      description: `Бензиновый`
    },
    {
      type: `Привод`,
      description: `Полный`
    },
    {
      type: `Объем двигателя, л`,
      description: `2.4`
    },
    {
      type: `Макс. крутящий момент`,
      description: `370/4500`
    },
    {
      type: `Количество цилиндров`,
      description: `4`
    }
  ],
  currentPrice: `2 300 000`,
  oldPrice: `2 400 000`,
  bigSliderImages: [
    {
      sourceSet: `img/black-car@1x.webp 1x, img/black-car@2x.webp 2x`,
      imageSource: `img/black-car@1x.jpg`,
      imageSourceSet: `img/black-car@2x.jpg 2x`,
      imageDescription: `Марпех 11, вид снаружи`,
    },
    {
      sourceSet: `img/desktop-car@1x.webp 1x, img/desktop-car@2x.webp 2x`,
      imageSource: `img/desktop-car@1x.jpg`,
      imageSourceSet: `img/desktop-car@2x.jpg 2x`,
      imageDescription: `Марпех 11, вид приборной панели`,
    },
    {
      sourceSet: `img/desktop-speedo@1x.webp 1x, img/desktop-speedo@2x.webp 2x`,
      imageSource: `img/desktop-speedo@1x.jpg`,
      imageSourceSet: `img/desktop-speedo@2x.jpg 2x`,
      imageDescription: `Марпех 11, вид спидометра`,
    }
  ],
  smallSliderImages: [
    {
      sourceSet: `img/black-car-mini@1x.webp 1x, img/black-car-mini@2x.webp 2x`,
      imageSource: `img/black-car-mini@1x.jpg`,
      imageSourceSet: `img/black-car-mini@2x.jpg 2x`,
      imageDescription: `Марпех 11, вид снаружи, маленькое изображение`,
    },
    {
      sourceSet: `img/desktop-car-mini@1x.webp 1x, img/desktop-car-mini@2x.webp 2x`,
      imageSource: `img/desktop-car-mini@1x.jpg`,
      imageSourceSet: `img/desktop-car-mini@2x.jpg 2x`,
      imageDescription: `Марпех 11, вид приборной панели, маленькое изображение`,
    },
    {
      sourceSet: `img/desktop-speedo-mini@1x.webp 1x, img/desktop-speedo-mini@2x.webp 2x`,
      imageSource: `img/desktop-speedo-mini@1x.jpg`,
      imageSourceSet: `img/desktop-speedo-mini@2x.jpg 2x`,
      imageDescription: `Марпех 11, вид спидометра, маленькое изображение`,
    }
  ]
}