import React from 'react'
import { Link } from 'react-router-dom'
import LegalPage from '../components/common/LegalPage'
import { legalInfo } from '../data/legal'

const Email = () => <a href={`mailto:${legalInfo.email}`}>{legalInfo.email}</a>

const sections = [
  {
    id: 'responsable',
    title: 'Identidad y domicilio del responsable',
    content: (
      <>
        <p>
          <strong>{legalInfo.name}</strong>, con domicilio en{' '}
          {legalInfo.address}, es responsable del tratamiento de los datos
          personales que nos proporciones a través de este sitio web, de nuestro
          correo electrónico, de llamadas telefónicas o de WhatsApp, y de su
          protección, conforme a la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares (en adelante, la «Ley») y
          demás normativa aplicable.
        </p>
        <p>
          Para cualquier asunto relacionado con este Aviso de Privacidad puedes
          contactarnos en <Email /> o al teléfono {legalInfo.phone}.
        </p>
      </>
    ),
  },
  {
    id: 'datos',
    title: 'Datos personales que recabamos',
    content: (
      <>
        <p>
          Recabamos únicamente los datos que tú nos proporcionas de forma
          directa y voluntaria al contactarnos:
        </p>
        <ul>
          <li>
            <strong>Datos de identificación:</strong> nombre.
          </li>
          <li>
            <strong>Datos de contacto:</strong> correo electrónico y número de
            teléfono.
          </li>
          <li>
            <strong>Datos laborales:</strong> nombre de la empresa u
            organización que representas.
          </li>
          <li>
            <strong>Información de tu proyecto:</strong> la descripción y los
            detalles que decidas compartir en tu mensaje.
          </li>
        </ul>
        <p>
          <strong>No recabamos datos personales sensibles</strong> a través de
          este sitio. Te pedimos no enviarnos por estos medios información de
          salud, expedientes clínicos ni datos de pacientes. Si un proyecto
          requiere el tratamiento de ese tipo de información, se formalizará en
          un contrato específico con las medidas de seguridad y los acuerdos de
          confidencialidad que correspondan.
        </p>
      </>
    ),
  },
  {
    id: 'finalidades',
    title: 'Finalidades del tratamiento',
    content: (
      <>
        <h3>Finalidades primarias</h3>
        <p>
          Son necesarias para atender tu solicitud y para la relación que, en su
          caso, establezcas con nosotros:
        </p>
        <ul>
          <li>Responder tus consultas y solicitudes de información.</li>
          <li>Elaborar y enviarte cotizaciones y propuestas de servicio.</li>
          <li>
            Contactarte para dar seguimiento a tu solicitud o a un proyecto en
            curso.
          </li>
          <li>
            Formalizar, ejecutar y dar seguimiento a los contratos de prestación
            de servicios que celebremos contigo.
          </li>
          <li>
            Cumplir las obligaciones legales, fiscales y contables aplicables.
          </li>
        </ul>
        <h3>Finalidades secundarias</h3>
        <p>
          No son necesarias para atender tu solicitud, pero nos permiten
          ofrecerte una mejor atención:
        </p>
        <ul>
          <li>
            Enviarte información sobre nuevos servicios, proyectos o novedades
            de {legalInfo.name}.
          </li>
          <li>Pedirte tu opinión sobre la calidad de nuestra atención.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'negativa',
    title: 'Cómo negarte a las finalidades secundarias',
    content: (
      <p>
        Si no deseas que tus datos se utilicen para las finalidades secundarias,
        envía un correo a <Email /> con el asunto «Negativa a finalidades
        secundarias», en cualquier momento. Tu negativa no será motivo para
        dejar de atender tu solicitud ni para negarte nuestros servicios.
      </p>
    ),
  },
  {
    id: 'transferencias',
    title: 'Transferencias y remisiones de datos',
    content: (
      <>
        <p>
          <strong>No vendemos, rentamos ni compartimos</strong> tus datos
          personales con terceros para fines comerciales.
        </p>
        <p>
          Podemos compartirlos con proveedores que nos prestan servicios (correo
          electrónico, almacenamiento en la nube, alojamiento web y mensajería),
          quienes los tratan por cuenta nuestra y únicamente para los fines
          descritos en este Aviso. Esta comunicación no requiere tu
          consentimiento conforme a la Ley.
        </p>
        <p>
          También podremos transferir tus datos sin tu consentimiento cuando lo
          exija una ley o lo solicite una autoridad competente, en los supuestos
          que la Ley permite.
        </p>
      </>
    ),
  },
  {
    id: 'arco',
    title: 'Derechos ARCO',
    content: (
      <>
        <p>
          Tienes derecho a <strong>Acceder</strong> a tus datos personales y
          conocer cómo los tratamos, a <strong>Rectificarlos</strong> si son
          inexactos o están incompletos, a <strong>Cancelarlos</strong> cuando
          consideres que no se requieren para las finalidades señaladas y a{' '}
          <strong>Oponerte</strong> a su tratamiento para fines específicos.
        </p>
        <p>
          Para ejercerlos, envía tu solicitud a <Email /> con la siguiente
          información:
        </p>
        <ol>
          <li>Tu nombre y un medio para comunicarte la respuesta.</li>
          <li>
            Copia de una identificación oficial vigente o, en su caso, los
            documentos que acrediten la representación legal.
          </li>
          <li>
            La descripción clara del derecho que deseas ejercer y de los datos
            personales involucrados.
          </li>
          <li>
            En caso de rectificación, las modificaciones que solicitas y la
            documentación que las respalde.
          </li>
        </ol>
        <p>
          Te responderemos en un plazo máximo de 20 días hábiles contados desde
          la recepción de tu solicitud. Si resulta procedente, la haremos
          efectiva dentro de los 15 días hábiles siguientes a la fecha de la
          respuesta.
        </p>
      </>
    ),
  },
  {
    id: 'revocacion',
    title: 'Revocación del consentimiento',
    content: (
      <p>
        Puedes revocar en cualquier momento el consentimiento que nos hayas
        otorgado para el tratamiento de tus datos, siguiendo el mismo
        procedimiento descrito para los derechos ARCO. Ten en cuenta que no en
        todos los casos podremos atender tu solicitud de inmediato, ya que es
        posible que por alguna obligación legal debamos seguir tratando tus
        datos. Asimismo, la revocación podría implicar que no podamos continuar
        prestándote el servicio que nos solicitaste.
      </p>
    ),
  },
  {
    id: 'limitacion',
    title: 'Limitación del uso y divulgación',
    content: (
      <p>
        Además del procedimiento anterior, puedes limitar el uso de tus datos
        para fines publicitarios inscribiéndote en el Registro Público para
        Evitar Publicidad (REPEP) de la Procuraduría Federal del Consumidor.
      </p>
    ),
  },
  {
    id: 'tecnologias',
    title: 'Cookies y tecnologías de rastreo',
    content: (
      <>
        <p>
          Este sitio <strong>no utiliza cookies propias</strong> ni herramientas
          de analítica o publicidad para rastrear tu navegación.
        </p>
        <p>
          Para mostrar algunos contenidos, el sitio carga recursos de servicios
          de terceros: tipografías de Google Fonts, imágenes alojadas en
          Unsplash y otros servidores externos, y un mapa de OpenStreetMap. Al
          cargarlos, esos servicios pueden recibir datos técnicos como tu
          dirección IP y el tipo de navegador, que tratan conforme a sus propias
          políticas de privacidad.
        </p>
        <p>
          Si nos contactas por WhatsApp o visitas los perfiles de LinkedIn
          enlazados en el sitio, la información que compartas en esas
          plataformas también se rige por sus respectivas políticas.
        </p>
      </>
    ),
  },
  {
    id: 'seguridad',
    title: 'Conservación y seguridad',
    content: (
      <p>
        Conservamos tus datos solo durante el tiempo necesario para cumplir las
        finalidades descritas y las obligaciones legales aplicables, y después
        los eliminamos de forma segura. Aplicamos medidas de seguridad
        administrativas, técnicas y físicas para protegerlos contra daño,
        pérdida, alteración, destrucción o uso, acceso o tratamiento no
        autorizado.
      </p>
    ),
  },
  {
    id: 'cambios',
    title: 'Cambios a este Aviso de Privacidad',
    content: (
      <p>
        Este Aviso puede modificarse por cambios en la legislación, en nuestros
        servicios o en nuestras prácticas de privacidad. Cualquier cambio se
        publicará en esta misma página, indicando la fecha de la última
        actualización.
      </p>
    ),
  },
  {
    id: 'autoridad',
    title: 'Autoridad competente',
    content: (
      <>
        <p>
          Si consideras que tu derecho a la protección de datos personales ha
          sido vulnerado, puedes acudir ante la autoridad competente en materia
          de protección de datos personales en posesión de los particulares.
        </p>
        <p>
          Consulta también nuestros{' '}
          <Link to="/terminos">Términos y Condiciones</Link>.
        </p>
      </>
    ),
  },
]

const PrivacyPage = () => (
  <LegalPage
    title="Aviso de Privacidad"
    description="Cómo recabamos, usamos y protegemos tus datos personales."
    updated={legalInfo.lastUpdated}
    sections={sections}
  />
)

export default PrivacyPage
