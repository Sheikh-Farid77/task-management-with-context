export default function generateId(tasks = []) {
    const nextId = tasks.reduce((prev, current) => (prev.id > current.id ? prev : current)).id;
    return (
        nextId + 1
    );
}