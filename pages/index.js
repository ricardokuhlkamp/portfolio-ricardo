import Head from 'next/head';
import { Inter } from '@next/font/google';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineFacebook, AiFillGithub, AiOutlineWhatsApp, AiFillInstagram } from 'react-icons/ai';
import Image from "next/image";
import ricardoImg from "../public/ricardo.fundoImagemRemovido.png";
import { FaCss3, FaHtml5, FaJs, FaReact, FaBootstrap, FaBalanceScale } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiDocker, SiNodedotjs } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import trybeWarts from '../public/trybeWarts.gif';
import tryunfo from '../public/tryUnfo.gif';
import solarSystem from '../public/solarSystem.gif';
import pixelArt from '../public/pixelArt.gif';
import pokedex from '../public/pokedex.gif';
import trybetunes from '../public/trybeTunes.gif';
import { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import { BiBookReader } from 'react-icons/bi';
import { RxCommit } from 'react-icons/rx';
import { TbTrees } from 'react-icons/tb';
import styles from '../styles/Index.module.css';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  // const router = useRouter();
  // const handleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   router.push({
  //     // pathname: '/about',
  //     query: { parametro: darkMode }
  //   })
  // }

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
                  onClick={ () => setDarkMode(!darkMode) }
                  className=" cursor-pointer text-2xl dark:text-gray-400" />
              </li>
              {/* <li>
                <Link className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-4 py-2 rounded-md ml-8" href="about">Resumo</Link>
              </li> */}
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-emerald-600 font-medium md:text-6xl">Ricardo Kühlkamp da Silva</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Estudante de Desenvolvimento Web.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">Estudante de Desenvolvimento Web na Trybe, e estudante de Análise e Desenvolvimento de Sistemas na Uniasselvi.</p>
          </div>
          <div className="text-5xl flex flex-wrap justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href='https://www.linkedin.com/in/ricardo-k%C3%BChlkamp-da-silva/' target="_blank" rel="noreferrer"><AiFillLinkedin className="hover:text-[#0a66c2] transition-colors duration-200 delay-200" /></a>
            <a href='https://github.com/ricardokuhlkamp' target="_blank" rel="noreferrer">
              <AiFillGithub className="hover:text-[#171515] transition-colors duration-200 delay-200" />
            </a>
            <a href='https://www.facebook.com/ricardo.kulkampdasilva' target="_blank" rel="noreferrer">
              <AiOutlineFacebook className="hover:text-[#1877f2] transition-colors duration-200 delay-200" />
            </a>
            <a href='https://api.whatsapp.com/send?phone=5547999156365&text=Olá%20Ricardo,%20vi%20seu%20portfolio!%20Podemos%20conversar?' target="_blank" rel="noreferrer">
              <AiOutlineWhatsApp className="hover:text-[#34af23] transition-colors duration-200 delay-200" />
            </a>
            <a href='https://www.instagram.com/ricardokds/' target="_blank" rel="noreferrer">
              <AiFillInstagram className="hover:text-[#c32aa3] transition-colors duration-200 delay-200" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-emerald-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={ricardoImg} className="w-44 mx-auto md:w-52" alt="Ricardo" />
          </div>
        </section>
        <hr className="h-px my-20 bg-gray-400 border-0 dark:bg-gray-700"></hr>
        <div className="text-center">
          <h3 className="text-3xl py-1 dark:text-white">Habilidades</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
            HardSkills:
          </p>
        </div>
        <div className="flex flex-wrap justify-center lg:flex gap-10">
          <div className="text-center flex flex-col justify-center py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <FaCss3 className="text-4xl self-center text-gray-600 hover:text-[#264de4] transition-colors duration-200 delay-300 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">CSS</h3>
          </div>
          <div className="text-center flex flex-col justify-center py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <FaHtml5 className="text-4xl self-center text-gray-600 hover:text-[#e34c26] transition-colors duration-200 delay-300 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">HTML</h3>
          </div>
          <div className="text-center flex flex-col justify-center py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <FaJs className="text-4xl self-center text-gray-600 hover:text-[#f0db4f] transition-colors duration-200 delay-300 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">Javascript</h3>
          </div>
          <div className="text-center flex flex-col justify-center py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <FaReact className="text-4xl self-center text-gray-600 hover:text-[#88dded] transition-colors duration-200 delay-300 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">ReactJS</h3>
          </div>
          <div className="text-center flex flex-col justify-center py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <FaBootstrap className="text-4xl self-center text-gray-600 hover:text-[#563d7c] transition-colors duration-200 delay-300 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">Bootstrap</h3>
          </div>
          <div className="text-center flex flex-col justify-center py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <SiTailwindcss className="text-4xl self-center text-gray-600 hover:text-[#36b7f0] transition-colors duration-200 delay-300 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">Tailwindcss</h3>
          </div>
          <div className="text-center flex flex-col justify-center py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <SiTypescript className="text-4xl self-center text-gray-600 hover:text-[#3178c6] transition-colors duration-200 delay-300 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">Typescript</h3>
          </div>
          <div className="text-center flex flex-col justify-center py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <SiDocker className="text-4xl self-center text-gray-600 hover:text-[#086dd7] transition-colors duration-200 delay-300 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">Docker</h3>
          </div>
          <div className="text-center flex flex-col justify-center py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <SiNodedotjs className="text-4xl self-center text-gray-600 hover:text-[#578f4a] transition-colors duration-200 delay-300 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">Node.js</h3>
          </div>
          <div className="text-center flex flex-col justify-center py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <GrMysql className="text-4xl self-center text-gray-600 hover:text-[#68a0b1] transition-colors duration-200 delay-300 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">MySQL</h3>
          </div>
        </div>
        {/* <div className="text-center">
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
            SoftSkills:
          </p>
        </div>
        <div className="flex flex-wrap justify-center lg:flex gap-10">
          <div className="text-center flex flex-col py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <FaBalanceScale className="text-4xl self-center text-gray-600 hover:text-emerald-600 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">Honestidade</h3>
          </div>
          <div className="text-center flex flex-col justify-center py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <RxCommit className="text-4xl self-center text-gray-600 hover:text-emerald-600 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">Comprometimento e Responsabildade</h3>
          </div>
          <div className="text-center flex flex-col justify-center py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <TbTrees className="text-4xl self-center text-gray-600 hover:text-emerald-600 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">Disposição para cooperar e colaborar</h3>
          </div>
          <div className="text-center flex flex-col justify-center py-3 text-gray-600 shadow-lg p-8 rounded-xl my-10 dark:bg-white dark:shadow-sky-500/50">
            <BiBookReader className="text-4xl self-center text-gray-600 hover:text-emerald-600 sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl" />
            <h3 className="font-medium pt-8 pb-2 text-emerald-600 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-sm">Disposição para aprender</h3>
          </div>
        </div> */}
        <hr className="h-px my-20 bg-gray-400 border-0 dark:bg-gray-700"></hr>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Projetos do Curso<pan className="text-emerald-500">Trybe</pan>.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:flex gap-10 flex-col lg:flex-row lg:flex-wrap pb-20">

            <div className="basis-[45%] shadow-lg p-8 rounded-xl my-5 text-center dark:bg-white dark:shadow-sky-500/50">
              <Image src={tryunfo} alt="tryunfo" className="rounded-lg object-cover" width={'100%'} heigth={'100%'} />
              <div className="mt-6">
                <h2 className="font-bold text-xl">Tryunfo</h2>
                <p className="text-gray-800">HTML, CSS, ReactJS</p>
              </div>
            </div>
            <div className="basis-[45%] shadow-lg p-8 rounded-xl my-5 text-center dark:bg-white dark:shadow-sky-500/50">
              <Image src={pixelArt} alt="pixelArt" className="rounded-lg object-cover" width={'100%'} heigth={'100%'} />
              <div className="mt-6">
                <h2 className="font-bold text-xl">Pixel Art</h2>
                <p className="text-gray-800">HTML, CSS, JS</p>
              </div>
            </div>

            <div className="basis-[45%] flex-1 shadow-lg p-8 rounded-xl my-5 text-center dark:bg-white dark:shadow-sky-500/50">
              <Image src={trybeWarts} alt="trybewarts" className="rounded-lg object-cover" width={'100%'} heigth={'100%'} />
              <div className="mt-6">
                <h2 className="font-bold text-xl">TrybeWarts</h2>
                <p className="text-gray-800">HTML, CSS, JS</p>
              </div>
            </div>
            <div className="basis-[45%] shadow-lg p-8 rounded-xl my-5 text-center dark:bg-white dark:shadow-sky-500/50">
              <Image src={solarSystem} alt="solarSystem" className="rounded-lg object-cover" width={'100%'} heigth={'100%'} />
              <div className="mt-6">
                <h2 className="font-bold text-xl">Solar System</h2>
                <p className="text-gray-800">HTML, CSS, ReactJS</p>
              </div>
            </div>

            {/* <div className="basis-[45%] shadow-lg p-8 rounded-xl my-5 text-center dark:bg-white dark:shadow-sky-500/50">
              <video autoPlay loop muted className="rounded-lg object-cover" width={'100%'} heigth={'100%'}>
                <source src="/tt.mp4" type="video/mp4" />
              </video>
              <div className="mt-6">
                <h2 className="font-bold text-xl">TrybeTunes</h2>
                <p className="text-gray-800">HTML, CSS, ReactJS, Bootstrap, React-Bootstrap</p>
              </div>
            </div> */}
            <div className="basis-[45%] shadow-lg p-8 rounded-xl my-5 text-center dark:bg-white dark:shadow-sky-500/50">
              <Image src={trybetunes} alt="trybetunes" className="rounded-lg object-cover" width={'100%'} heigth={'100%'} />
              <div className="mt-6">
                <h2 className="font-bold text-xl">TrybeTunes</h2>
                <p className="text-gray-800">HTML, CSS, ReactJS, Bootstrap, React-Bootstrap</p>
              </div>
            </div>
            <div className="basis-[45%] shadow-lg p-8 rounded-xl my-5 text-center dark:bg-white dark:shadow-sky-500/50">
              <Image src={pokedex} alt="pokedex" className="rounded-lg object-cover" width={'100%'} heigth={'100%'} />
              <div className="mt-6">
                <h2 className="font-bold text-xl">Pokedex</h2>
                <p className="text-gray-800">HTML, CSS, ReactJS</p>
              </div>
            </div>
          </div>
        </section>
        <hr className="h-px my-20 bg-gray-400 border-0 dark:bg-gray-700"></hr>
        <section className="min-h-screen">
        <div>
            <h3 className="text-3xl py-1 dark:text-white">Sobre</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Sou uma pessoa determinada, comprometida, responsável, e disposta a aprender novos conhecimentos.</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Possuo formação em engenharia agronômica pela UDESC-Lages/ SC e estou em transição de carreira.</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Fui funcionário público concursado como engenheiro agronômo/analista ambiental. Trabalhando na área ambiental, tive contato com a programação através da Linguagem-R para análise de dados de inventários florestais o que despertou novamente meu interesse pela programação e a vontande e coragem para efetuar uma transição de carreira.</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Estou cursando Análise e Desenvolvimento de Sistemas na UNIASSELVI. E concomitantemente sou estudante do curso de Desenvonvimento Web da Trybe!</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Atualmente na Trybe, como estudante de desenvolvimento web na Trybe pude aplicar as seguintes tecnologias: Git, HTML, CSS, Javascript, React, TypeScript, Docker, e MySQL.</p>
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
