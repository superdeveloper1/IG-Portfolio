import jsPDF from 'jspdf'

export const generateResumePDF = () => {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  let yPosition = 20

  const setFont = (size, weight = 'normal') => {
    doc.setFontSize(size)
    doc.setFont('helvetica', weight)
  }

  const addText = (text, x = 20, y = yPosition, options = {}) => {
    doc.setTextColor(options.color || [0, 0, 0])
    doc.text(text, x, y, options)
    yPosition = y + (options.lineHeight || 7)
    return yPosition
  }

  // Header
  setFont(28, 'bold')
  addText('Isaias Geronimo', 20, yPosition)
  yPosition += 8

  setFont(14, 'bold')
  doc.setTextColor([59, 130, 246])
  addText('Frontend Developer', 20, yPosition)
  yPosition += 6

  setFont(10)
  doc.setTextColor([100, 100, 100])
  addText('Rockaway Park, NY • isaiasgeronimo12@gmail.com', 20, yPosition)
  yPosition += 12

  // Summary
  setFont(12, 'bold')
  doc.setTextColor([0, 0, 0])
  addText('SUMMARY', 20, yPosition)
  yPosition += 6

  setFont(10)
  doc.setTextColor([60, 60, 60])
  const summaryText = 'Frontend Developer skilled in JavaScript, React, and responsive UI development. Experienced with component-based architecture, state management, async workflows, and Tailwind CSS. Focused on clean code, modern tooling, and polished user interfaces.'
  const summaryLines = doc.splitTextToSize(summaryText, pageWidth - 40)
  doc.text(summaryLines, 20, yPosition)
  yPosition += summaryLines.length * 5 + 6

  // Projects
  setFont(12, 'bold')
  doc.setTextColor([0, 0, 0])
  addText('PROJECTS', 20, yPosition)
  yPosition += 6

  setFont(11, 'bold')
  doc.setTextColor([0, 0, 0])
  addText('LuxeMarket (Project Vanta)', 20, yPosition)
  yPosition += 5

  setFont(9)
  doc.setTextColor([100, 100, 100])
  addText('React • Vite • Tailwind CSS • GitHub Pages', 20, yPosition)
  yPosition += 5

  setFont(10)
  doc.setTextColor([60, 60, 60])
  const projectDesc = 'A modern, responsive e-commerce storefront featuring reusable components, state management patterns, async workflows, and a stable GitHub Pages deployment. Built with a focus on clean UI architecture, performance, and maintainability.'
  const projectLines = doc.splitTextToSize(projectDesc, pageWidth - 40)
  doc.text(projectLines, 20, yPosition)
  yPosition += projectLines.length * 5 + 4

  setFont(10, 'bold')
  doc.setTextColor([0, 0, 0])
  addText('Key Contributions:', 20, yPosition)
  yPosition += 4

  const contributions = [
    'Developed responsive layouts and component-based UI architecture',
    'Implemented state management and async workflows',
    'Built reusable UI components with Tailwind CSS',
    'Managed deployment, build configuration, and project structure',
    'Ensured accessibility, performance, and mobile-first design'
  ]

  setFont(9)
  doc.setTextColor([60, 60, 60])
  contributions.forEach(contrib => {
    const lines = doc.splitTextToSize('• ' + contrib, pageWidth - 45)
    doc.text(lines, 25, yPosition)
    yPosition += lines.length * 4 + 2
  })

  yPosition += 4

  // Experience
  setFont(12, 'bold')
  doc.setTextColor([0, 0, 0])
  addText('EXPERIENCE', 20, yPosition)
  yPosition += 6

  setFont(11, 'bold')
  doc.setTextColor([0, 0, 0])
  addText('Frontend Developer', 20, yPosition)
  yPosition += 5

  setFont(9)
  doc.setTextColor([100, 100, 100])
  addText('LuxeMarket Project', 20, yPosition)
  yPosition += 5

  setFont(10)
  doc.setTextColor([60, 60, 60])
  const exp1Text = 'Built and maintained the LuxeMarket frontend using React, Vite, and Tailwind CSS. Implemented responsive layouts, UI state logic, async workflows, and component structure. Managed deployment, build configuration, and project organization.'
  const exp1Lines = doc.splitTextToSize(exp1Text, pageWidth - 40)
  doc.text(exp1Lines, 20, yPosition)
  yPosition += exp1Lines.length * 5 + 6

  setFont(11, 'bold')
  doc.setTextColor([0, 0, 0])
  addText('Junior Web Developer', 20, yPosition)
  yPosition += 5

  setFont(9)
  doc.setTextColor([100, 100, 100])
  addText('Generation USA (2019–2020)', 20, yPosition)
  yPosition += 5

  setFont(10)
  doc.setTextColor([60, 60, 60])
  const exp2Text = 'Worked on frontend tasks, responsive layouts, HTML/CSS structures, and JavaScript interactions while practicing collaborative workflows and modern development practices.'
  const exp2Lines = doc.splitTextToSize(exp2Text, pageWidth - 40)
  doc.text(exp2Lines, 20, yPosition)
  yPosition += exp2Lines.length * 5 + 6

  // Skills
  setFont(12, 'bold')
  doc.setTextColor([0, 0, 0])
  addText('SKILLS', 20, yPosition)
  yPosition += 6

  setFont(10, 'bold')
  doc.setTextColor([0, 0, 0])
  addText('Languages & Tools:', 20, yPosition)
  yPosition += 4

  setFont(9)
  doc.setTextColor([60, 60, 60])
  const langText = 'JavaScript (ES6+), HTML5, CSS3, React, Vite, Tailwind CSS, Git, GitHub, GitHub Pages'
  const langLines = doc.splitTextToSize(langText, pageWidth - 40)
  doc.text(langLines, 20, yPosition)
  yPosition += langLines.length * 4 + 4

  setFont(10, 'bold')
  doc.setTextColor([0, 0, 0])
  addText('Frontend Skills:', 20, yPosition)
  yPosition += 4

  setFont(9)
  doc.setTextColor([60, 60, 60])
  const frontendText = 'Component-based architecture, state management, responsive design, async/await, DOM manipulation, REST APIs, JSON'
  const frontendLines = doc.splitTextToSize(frontendText, pageWidth - 40)
  doc.text(frontendLines, 20, yPosition)
  yPosition += frontendLines.length * 4 + 4

  setFont(10, 'bold')
  doc.setTextColor([0, 0, 0])
  addText('UI/UX & Performance:', 20, yPosition)
  yPosition += 4

  setFont(9)
  doc.setTextColor([60, 60, 60])
  const uiText = 'Accessibility, layout systems, mobile-first design, performance optimization, clean UI patterns'
  const uiLines = doc.splitTextToSize(uiText, pageWidth - 40)
  doc.text(uiLines, 20, yPosition)
  yPosition += uiLines.length * 4 + 6

  // Education
  setFont(12, 'bold')
  doc.setTextColor([0, 0, 0])
  addText('EDUCATION', 20, yPosition)
  yPosition += 6

  setFont(11, 'bold')
  doc.setTextColor([0, 0, 0])
  addText('AAS, Computer Science', 20, yPosition)
  yPosition += 5

  setFont(9)
  doc.setTextColor([100, 100, 100])
  addText('Monroe College, 2020', 20, yPosition)

  // Save
  doc.save('Isaias_Geronimo_Resume.pdf')
}
