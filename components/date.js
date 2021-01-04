import { parseISO, format } from 'date-fns'

//　JSの分割代入を使うことでいちいちprops.dateStringみたいな形で
//  使わなくてもそのまま使える
export default function Date({ dateString }) {
  const date = parseISO(dateString)
return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
