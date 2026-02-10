async function searchResume() {
        const fio = document.getElementById('canname').value;
        const resultDiv = document.getElementById('result');
        
        // Показываем загрузку
        resultDiv.innerHTML = '<p>Ищем резюме...</p>';
        
        try {
            const response = await fetch('http://ваш-сервер.ru/api/search-resume', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fio: fio
                })
            });
            
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            
            const resume = await response.json();
            
            // Отображаем результат
            resultDiv.innerHTML = `
                <h2>${resume.full_name || 'ФИО не указано'}</h2>
                <p><strong>Должность:</strong> ${resume.position || 'Не указана'}</p>
                <p><strong>Опыт работы:</strong> ${resume.experience || 'Не указан'}</p>
                <p><strong>Навыки:</strong> ${resume.skills || 'Не указаны'}</p>
                <p><strong>Образование:</strong> ${resume.education || 'Не указано'}</p>
            `;
            
        } catch (error) {
            resultDiv.innerHTML = `<p style="color: red;">Ошибка: ${error.message}</p>`;
        }
    }