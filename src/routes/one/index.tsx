import { component$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'

export default component$(() => {
  const loc = useLocation()
  return (
    <div>
      <h1>Page One</h1>
      <pre>
        <code>{JSON.stringify(loc, null, 2)}</code>
      </pre>
    </div>
  )
})
