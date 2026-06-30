
export const skills = [
        {class:"front skill", summary:"Front", skills:["HTML/CSS", "JS", "Vue.Js", "Angular", "React"]},
        {class:"back skill", summary:"Back", skills:["Golang", "JAVA", "PHP", "Laravel"]},
            {class:"database skill", summary:"Database", skills:["MangoDB", "MySQL"]},
        {class:"complementary skill", summary:"Complémentaire", skills:["Git", "Jira", "Confluence", "Méthodologie Agile","Docker"]},
    ]
const skillsHTML = skills.map(skill => {
    return `
    <details class="${skill.class}">
        <summary>${skill.summary}</summary>
            <ul>
                ${skill.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </details>
        `}).join('')
        document.getElementById('skills-list').innerHTML = skillsHTML