import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';

function About() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ricardo Kühlkamp - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/myfavicon.ico" />
      </Head>
      <main className="bg-white px-10 md-px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">desenvolvido por Ricardo</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl dark:text-gray-400" />
              </li>
              <li>
                <Link className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-4 py-2 rounded-md ml-8" href="/">Home</Link>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Sobre</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Sou uma pessoa determinada, comprometida, responsável, e disposta a aprender novos conhecimentos.</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Possuo formação em engenharia agronômica pela UDESC-Lages/ SC e atualmente sou funcionário da prefeitura de Balneário Barra do Sul-SC.</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Na prefeitura, trabalhando na área ambiental, tive contato com a programação através da Linguagem-R para análise de dados de inventários florestais o que despertou novamente meu interesse pela programação e a vontande e coragem para efetuar uma transição de carreira.</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Atualmente estou cursando Análise e Desenvolvimento de Sistemas na UNIASSELVI. E concomitantemente sou estudante do curso de Desenvonvimento Web da Trybe!</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Atualmente na Trybe conclui os estudos do Módulo de Fundamentos onde estudamos Unix & Bash, Git & GitHub, HTML, CSS, Javascript e agora estou estudando React no Módulo de Front-end.</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Tenho interesse em trabalhar com tecnologia, especialmente na área de programação como desenvovedor Full-Stack ou Ciência de Dados. Meus estudos são parte do movimento que faço para atingir meu objetivo de trabalhar no ramo da tecnologia!</p>
          </div>

          <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>

          <div>
            <h3 className="text-3xl pb-3 pt-4 dark:text-white">Formação Acadêmica</h3>

            <h2 className="text-2xl py-1 dark:text-white">Trybe</h2>
            <h2 className="text-xl py-1 dark:text-white">Desenvilvimento Web</h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">setembro de 2022 - setembro de 2023.</p>

            <h2 className="text-2xl py-1 dark:text-white">UNIASSELVI</h2>
            <h2 className="text-xl py-1 dark:text-white">Tecnólogo, Análise e Desenvolvimento de Sistemas</h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">outubro de 2020 - março de 2023.</p>

            <h2 className="text-2xl py-1 dark:text-white">Universidade do Estado de Santa Catarina</h2>
            <h2 className="text-xl py-1 dark:text-white">Bacharelado, Agronomia</h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">2004 - 2009.</p>
          </div>

          <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>

          <div className="pb-20">
            <h3 className="text-3xl pb-3 pt-4 dark:text-white">Experiência</h3>

            <h2 className="text-2xl py-1 dark:text-white">Prefeitura Municipal de Balneário Barra do Sul - SC</h2>
            <h2 className="text-xl py-1 dark:text-white">Engenheiro agrônomo</h2>
            <h2 className="text-xl py-1 dark:text-white">março de 2019 - Present (3 anos 10 meses)</h2>
            <h2 className="text-xl py-1 dark:text-white">Balneário Barra do Sul - SC</h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Engenheiro agrônomo efetivo na Seplan (Secretaria de Planejamento), setor de Meio Ambiente, na Prefeitura Municipal de Balneário Barra do Sul - SC.</p>

            <h2 className="text-2xl py-1 dark:text-white">Consultor técnico de vendas comissionado (fertilizantes Ferticel)</h2>
            <h2 className="text-xl py-1 dark:text-white">Autônomo</h2>
            <h2 className="text-xl py-1 dark:text-white">agosto de 2017 - março de 2019 (1 ano 8 meses)</h2>
            <h2 className="text-xl py-1 dark:text-white">Litoral norte catarinense e grande Florianópolis</h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Realização de visitas aos produtores rurais, efetuando a venda de fertilizantes orgânicos e organominerais direto de fábrica.</p>

            <h2 className="text-2xl py-1 dark:text-white">Agricultura</h2>
            <h2 className="text-xl py-1 dark:text-white">Agricultor/Engenheiro agrônomo</h2>
            <h2 className="text-xl py-1 dark:text-white">janeiro de 2017 - agosto de 2017 (8 meses)</h2>
            <h2 className="text-xl py-1 dark:text-white">Luis Alves, SC, Brasil</h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Cultivo de hortaliças.</p>

            <h2 className="text-2xl py-1 dark:text-white">Proagro agropecuária ltda me</h2>
            <h2 className="text-xl py-1 dark:text-white">Engenheiro agrônomo</h2>
            <h2 className="text-xl py-1 dark:text-white">janeiro de 2014 - janeiro de 2017 (3 anos 1 mês)</h2>
            <h2 className="text-xl py-1 dark:text-white">Luis Alves, SC, Brasil</h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Comercialização de insumos agrícolas.</p>

            <h2 className="text-2xl py-1 dark:text-white">Credialves</h2>
            <h2 className="text-xl py-1 dark:text-white">Engenheiro agrônomo</h2>
            <h2 className="text-xl py-1 dark:text-white">setembro de 2009 - abril de 2013 (3 anos 8 meses)</h2>
            <h2 className="text-xl py-1 dark:text-white">Luis Alves, SC, Brasil</h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Elaboração de projetos de custeio e investimento agrícola.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About;