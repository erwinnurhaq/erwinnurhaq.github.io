async function main() {
    const params = new URLSearchParams(window.location.search)
    const name = DOMPurify.sanitize(params.get('name'))
    const res = await fetch(`/blog/${name}.md`)
    const text = await res.text()
    console.log(text)
    document.getElementById('content').innerHTML = text
}

main()