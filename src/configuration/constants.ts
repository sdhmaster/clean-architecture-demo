export const CONSTANTS = {
  STATUS: {
    SUBSCRIBING: 'subscribing', // 구독 중
    CANCELED: 'canceled', // 구독 취소
  },
  ORDER_STATUS: {
    RESERVED: 'reserved',
    PAY: 'pay',
    READY: 'ready',
    DELIVERY_START: 'delivery_start',
    DELIVERY_ARRIVE: 'delivery_arrive',
    DELIVERY_CONFIRM: 'delivery_confirm',
    CANCEL: 'cancel',
    SKIP: 'skip',
    SKIP_CANCEL: 'skip_cancel',
    UPDATE_CANCEL: 'update_cancel',
    REFUND: 'refund',
    EXCHANGE: 'exchange',
    FAIL: 'fail',
    UNVALID: 'unvalid',
  },
  SCHEDULE_STATUS: {
    NOW: 'now',
    NEXT: 'next',
    PAST: 'past',
    PLANNED: 'planned',
  },
  KAKAO_TEMPLATE: {
    // 구독-1: 구독 성공
    START_SUBSCRIPTION: {
      CODE: 'S1_subsuccess_2201',
      MSG: `[술담화] 담화박스 신청 완료 안내\n\n나에게 선물하는 소소한 행복, 담화박스\n\n{userName}님을 위한 {plan} 구독서비스가 신청되었습니다.\n\n예정 배송일: {shippingDate}\n예정 결제일: {billingDate}\n구독 수량 / 결제예정금액: {amount} / {price}\n\n{userName}님의 인생술, 술담화가 꼭 찾아드릴게요! :)`,
      BUTTON: [
        {
          name: '구독관리 바로가기',
          type: 'WL', // WL: 웹링크, 스윗트래커 카카오톡 비즈메시지 API 문서 참고
          url_pc:
            'https://www.sooldamhwa.com/subscribe?utm_source=dm&utm_medium=kakaodm&utm_campaign=su_sumain&utm_content=kch_web_cv&utm_term=%EC%B1%84%EB%84%90%ED%86%A1%20%EA%B5%AC%EB%8F%85%EC%84%9C%EB%B9%84%EC%8A%A4%20%EB%B0%94%EB%A1%9C%EA%B0%80%EA%B8%B0_text',
          url_mobile:
            'https://www.sooldamhwa.com/subscribe?utm_source=dm&utm_medium=kakaodm&utm_campaign=su_sumain&utm_content=kch_web_cv&utm_term=%EC%B1%84%EB%84%90%ED%86%A1%20%EA%B5%AC%EB%8F%85%EC%84%9C%EB%B9%84%EC%8A%A4%20%EB%B0%94%EB%A1%9C%EA%B0%80%EA%B8%B0_text',
        },
      ],
    },
    // 구독-3: 구독 쉬어가기
    SKIP_SUBSCRIPTION: {
      CODE: 'S3_rest_2201',
      MSG: `[술담화] 쉬어가기 신청 완료\n\n{userName}님, {thisSchedule}가 정상적으로 ‘쉬어가기’가 되었습니다.\n\n‘쉬어가기’ 기능은 1달만 적용되고 있으며, {nextSchedule} 결제일에는 결제가 다시 요청될 예정입니다.`,
    },
    // 구독-5: 구독 성공
    PAY_SUBSCRIPTION: {
      CODE: 'S5_subokay_2201',
      MSG: `[술담화] {product_name} 결제 완료\n\n나에게 찾아오는 인생술, 담화박스\n\n{userName}님을 위한 {product_name} 정기결제가 성공하였습니다.\n\n결제 금액: {pay_price}\n배송지: {address}\n\n{userName}님의 인생술, 술담화가 꼭 찾아드릴게요! :)`,
    },
    // 구독-8: 구독 취소 안내
    CANCEL_SUBSCRIPTION: {
      CODE: 'S8_cancle_2201',
      MSG: `[술담화] 구독 취소 안내\n\n{userName}님, {plan} 구독 결제가 정상적으로 취소되었습니다.\n\n전통주 구독 서비스를 이용하시는 동안\n{userName}님의 인생술을 찾으셨기를 바랍니다. :)\n\n이용해 주셔서 감사드립니다.`,
    },
  },
};
