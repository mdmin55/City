import { useEffect } from 'react'

const useTitle = ({ title }) => {
	return useEffect(() => {
		document.title = `Городской портал | ${title}`
	})
}

export default useTitle
