import React from 'react'
import { Link } from 'react-router-dom'
import LegalPage from '../components/common/LegalPage'
import { legalInfo } from '../data/legal'

const sections = [
  {
    id: 'aceptacion',
    title: 'Aceptación de los términos',
    content: (
      <p>
        Estos Términos y Condiciones regulan el acceso y uso de este sitio web,
        propiedad de <strong>{legalInfo.name}</strong>, con domicilio en{' '}
        {legalInfo.address}. Al navegar en el sitio o contactarnos a través de
        él, aceptas estos términos. Si no estás de acuerdo con ellos, te pedimos
        no utilizar el sitio.
      </p>
    ),
  },
  {
    id: 'objeto',
    title: 'Objeto del sitio',
    content: (
      <p>
        Este sitio tiene fines informativos: presenta a {legalInfo.name}, sus
        servicios de desarrollo de software, soluciones médicas digitales,
        inteligencia artificial y consultoría tecnológica, así como ejemplos de
        proyectos realizados, y ofrece medios para contactarnos.
      </p>
    ),
  },
  {
    id: 'uso',
    title: 'Uso permitido',
    content: (
      <>
        <p>Al utilizar el sitio te comprometes a:</p>
        <ul>
          <li>Usarlo de forma lícita y conforme a estos términos.</li>
          <li>
            Proporcionar información veraz cuando nos contactes y no suplantar
            la identidad de otra persona.
          </li>
          <li>
            No intentar acceder sin autorización a sus sistemas, interferir con
            su funcionamiento ni introducir código malicioso.
          </li>
          <li>
            No utilizar los medios de contacto para enviar publicidad no
            solicitada ni contenido ofensivo o ilegal.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'servicios',
    title: 'Servicios, cotizaciones y contratación',
    content: (
      <>
        <p>
          La descripción de los servicios en este sitio es general e informativa
          y no constituye una oferta vinculante.
        </p>
        <p>
          El alcance, los entregables, los plazos, el precio y las condiciones
          de pago de cada proyecto se definen en una cotización o propuesta por
          escrito. La relación comercial se formaliza únicamente cuando ambas
          partes aceptan esa propuesta o firman el contrato correspondiente, que
          prevalecerá sobre estos términos en lo que se refiera al proyecto.
        </p>
        <p>
          Las cotizaciones tienen la vigencia que se indique en cada una de
          ellas.
        </p>
      </>
    ),
  },
  {
    id: 'proyectos',
    title: 'Proyectos y casos presentados',
    content: (
      <p>
        Los proyectos que se muestran en el sitio se presentan como referencia
        de nuestra experiencia. La información técnica, los plazos y los
        resultados descritos corresponden a cada caso en particular y no
        garantizan resultados idénticos en otros proyectos, que dependen de sus
        propios requisitos y condiciones.
      </p>
    ),
  },
  {
    id: 'propiedad',
    title: 'Propiedad intelectual',
    content: (
      <>
        <p>
          El nombre, el logotipo y la marca {legalInfo.name}, así como los
          textos, el diseño y el código de este sitio, son propiedad de{' '}
          {legalInfo.name} o se utilizan con autorización, y están protegidos
          por la legislación mexicana en materia de propiedad intelectual e
          industrial. No está permitido reproducirlos, distribuirlos ni
          modificarlos sin nuestro consentimiento previo y por escrito.
        </p>
        <p>
          Algunas fotografías provienen de bancos de imágenes como Unsplash y se
          utilizan conforme a sus licencias; sus derechos pertenecen a sus
          respectivos autores.
        </p>
        <p>
          La titularidad del software y los entregables desarrollados para cada
          cliente se rige por lo pactado en el contrato del proyecto.
        </p>
      </>
    ),
  },
  {
    id: 'terceros',
    title: 'Enlaces y servicios de terceros',
    content: (
      <p>
        El sitio incluye enlaces y contenidos de terceros, como WhatsApp,
        LinkedIn, OpenStreetMap y Google Fonts. No controlamos esos servicios ni
        somos responsables de su contenido, disponibilidad o prácticas de
        privacidad. Su uso se rige por los términos de cada proveedor.
      </p>
    ),
  },
  {
    id: 'responsabilidad',
    title: 'Limitación de responsabilidad',
    content: (
      <>
        <p>
          Procuramos que la información del sitio sea correcta y esté
          actualizada, pero no garantizamos que esté libre de errores ni que el
          sitio funcione sin interrupciones.
        </p>
        <p>
          En la medida que lo permita la ley, {legalInfo.name} no será
          responsable de daños derivados del uso o la imposibilidad de usar el
          sitio, ni de decisiones tomadas con base exclusivamente en su
          contenido. Las responsabilidades relativas a un proyecto contratado
          son las que establezca el contrato correspondiente.
        </p>
      </>
    ),
  },
  {
    id: 'privacidad',
    title: 'Protección de datos personales',
    content: (
      <p>
        El tratamiento de los datos personales que nos proporciones se rige por
        nuestro <Link to="/privacidad">Aviso de Privacidad</Link>.
      </p>
    ),
  },
  {
    id: 'modificaciones',
    title: 'Modificaciones',
    content: (
      <p>
        Podemos actualizar estos términos en cualquier momento. La versión
        vigente será siempre la publicada en esta página, con su fecha de última
        actualización. El uso del sitio después de un cambio implica la
        aceptación de la nueva versión.
      </p>
    ),
  },
  {
    id: 'jurisdiccion',
    title: 'Legislación aplicable y jurisdicción',
    content: (
      <p>
        Estos términos se rigen por las leyes de los Estados Unidos Mexicanos.
        Para cualquier controversia relacionada con ellos, las partes se someten
        a la jurisdicción de los tribunales competentes de Tuxtla Gutiérrez,
        Chiapas, renunciando a cualquier otro fuero que pudiera corresponderles
        por razón de su domicilio presente o futuro.
      </p>
    ),
  },
  {
    id: 'contacto',
    title: 'Contacto',
    content: (
      <p>
        Si tienes dudas sobre estos términos, escríbenos a{' '}
        <a href={`mailto:${legalInfo.email}`}>{legalInfo.email}</a> o llámanos
        al {legalInfo.phone}.
      </p>
    ),
  },
]

const TermsPage = () => (
  <LegalPage
    title="Términos y Condiciones"
    description="Condiciones de uso de este sitio y de la contratación de nuestros servicios."
    updated={legalInfo.lastUpdated}
    sections={sections}
  />
)

export default TermsPage
