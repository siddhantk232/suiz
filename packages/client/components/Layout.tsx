import styled from 'styled-components'

const Layout = ({ children }) => (
  <div>
    {children}
    <Footer />
  </div>
)

function Footer() {
  return (
    <StyledFooter>
      <p>
        Made with{' '}
        <svg
          width="23"
          height="19"
          viewBox="0 0 23 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.2913 2.45648C19.7806 1.99473 19.1741 1.62844 18.5067 1.37853C17.8392 1.12863 17.1238 1 16.4013 1C15.6788 1 14.9634 1.12863 14.2959 1.37853C13.6285 1.62844 13.0221 1.99473 12.5113 2.45648L11.4513 3.41431L10.3913 2.45648C9.35961 1.52422 7.96033 1.00048 6.5013 1.00048C5.04226 1.00048 3.64299 1.52422 2.61129 2.45648C1.5796 3.38873 1 4.65314 1 5.97155C1 7.28996 1.5796 8.55437 2.61129 9.48662L3.67129 10.4445L11.4513 17.4746L19.2313 10.4445L20.2913 9.48662C20.8023 9.0251 21.2077 8.47712 21.4842 7.87399C21.7608 7.27086 21.9031 6.6244 21.9031 5.97155C21.9031 5.3187 21.7608 4.67224 21.4842 4.06911C21.2077 3.46598 20.8023 2.918 20.2913 2.45648Z"
            fill="#FF00E5"
            stroke="#FF00E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{' '}
        by{' '}
        <a target="_blank" href="https://www.github.com/siddhantk232">
          @siddhantk232
        </a>
      </p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
  width: 100%;
  height: 4em;
`

export default Layout
