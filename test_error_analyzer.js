import parse from "./parse.js";

const input = `[[12, 12] + 12, 13]]`; // Ошибка в этой строке (неправильная скобка)

const result = parse(input);

if (result.success) {
    console.log('Синтаксический анализ успешен!');
    console.log('Дерево разбора:', result.tree.toStringTree());
} else {
    console.log('Ошибки синтаксического анализа:');
    result.errors.forEach((error) => {
        console.log(`Строка ${error.line}, столбец ${error.column}: ${error.msg}`);
    });
}
