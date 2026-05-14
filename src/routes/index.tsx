import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: async () => await window.api.helloWorld(),
  component: Index,
})

function Index() {
  const data = Route.useLoaderData();
  return (
    <div className="p-2">
      <h3 className="text-red-500">{JSON.stringify(data)}</h3>
    </div>
  )
}
