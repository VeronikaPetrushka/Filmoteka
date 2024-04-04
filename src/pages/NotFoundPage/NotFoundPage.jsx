import css from './NotFoundPage.module.css'
import { TbMoodSadDizzy } from "react-icons/tb";

export default function NotFoundPage() {
  return <div className={css.notFoundContainer}>
    <h1 className={css.notFound}>Not found page</h1>
    <TbMoodSadDizzy color='black' size='50' className={css.notFounfIcon} />
  </div>;
}
