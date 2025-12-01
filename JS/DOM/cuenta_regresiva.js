const d = Document;

export default function countDown (id, limitDate, FinalMessage) {
      const $countDown = d.getElementById(id),
      countDownDate = new Date(limitDate);

      console.log($countDown);
      console.log(countDownDate);

}