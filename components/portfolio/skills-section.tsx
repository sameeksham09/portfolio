"use client";

import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 128 128" className="size-8">
      <linearGradient id="py-a" x1="70.252" x2="170.659" y1="1237.476" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#5A9FD4" />
        <stop offset="1" stopColor="#306998" />
      </linearGradient>
      <linearGradient id="py-b" x1="209.474" x2="173.62" y1="1098.811" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFD43B" />
        <stop offset="1" stopColor="#FFE873" />
      </linearGradient>
      <path fill="url(#py-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" />
      <path fill="url(#py-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" />
    </svg>
  );
}

function JavaIcon() {
  return (
    <svg viewBox="0 0 128 128" className="size-8">
      <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" />
      <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z" />
      <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z" />
      <path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 33.21c-20.348 15.023-4.643 23.576-.001 33.374-11.875-10.726-20.59-20.169-14.752-28.96C58.023 25.456 82.76 19.943 76.491 1.587z" />
      <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z" />
    </svg>
  );
}

function SqlIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="6" rx="8" ry="3" className="stroke-primary" />
      <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" className="stroke-primary" />
      <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" className="stroke-primary" />
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 128 128" className="size-8">
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
      <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.236 5.764 9.032 9.517 31.58 9.038 35.652-5.244.142-.451 1.235-3.756.477-8.46zM72.442 54.503H59.83v23.927c0 5.1.243 9.948-.452 11.395-1.158 3.022-4.045 3.998-6.724 3.487-2.785-.594-4.198-2.272-5.784-4.986l-9.508 5.784c1.583 3.249 3.915 6.07 6.902 7.9 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-8.358 0-16.717 0-25.078z" />
    </svg>
  );
}

function GoIcon() {
  return (
    <svg viewBox="0 0 128 128" className="size-8">
      <path fill="#00ACD7" d="M17.893 56.933c-.182.21-.036.392.191.252l4.221-2.526c.228-.14.536-.14.764 0l4.221 2.526c.227.14.373-.042.191-.252L24.042 52.1a.586.586 0 00-.764 0l-5.385 4.833z" />
      <path fill="#00ACD7" d="M64 19.6c-24.538 0-44.4 19.862-44.4 44.4S39.462 108.4 64 108.4c24.537 0 44.4-19.862 44.4-44.4S88.538 19.6 64 19.6zm16.126 59.46c-.28.34-.7.54-1.14.54H49.014c-.44 0-.86-.2-1.14-.54a1.498 1.498 0 01-.3-1.22l2.86-15.4c.14-.72.78-1.26 1.52-1.26h23.92c.74 0 1.38.54 1.52 1.26l2.86 15.4c.08.42-.02.86-.3 1.22h.17zm4.694-21.6H43.18c-.84 0-1.58-.54-1.84-1.34l-3.48-10.4c-.18-.54-.08-1.14.26-1.58s.86-.7 1.4-.7h49.02c.54 0 1.04.26 1.4.7.34.44.44 1.04.26 1.58l-3.54 10.4c-.26.8-1 1.34-1.84 1.34z" />
    </svg>
  );
}

function PerlIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none">
      <text x="2" y="18" fontSize="14" fontWeight="bold" fill="currentColor" className="text-primary">{"Pl"}</text>
    </svg>
  );
}

function SpringBootIcon() {
  return (
    <svg viewBox="0 0 128 128" className="size-8">
      <path fill="#6DB33F" d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.958 0 64.179a64.088 64.088 0 0019.69 46.248l1.767 1.767a64.042 64.042 0 0043.789 16.392c34.716-.413 63.166-29.376 63.166-64.205a63.859 63.859 0 00-11.96-37.738zM95.56 100.146a5.3 5.3 0 01-7.36.413l-37.263-31.3a5.09 5.09 0 01-1.767-3.874v-1.787l-7.73-6.554a2.254 2.254 0 01-.124-3.18 2.237 2.237 0 013.18-.124l6.327 5.387a5.09 5.09 0 015.346-.434l37.272 22.072a5.313 5.313 0 012.119 7.381z" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none">
      <path d="M7 3h10M9 3v5l-5 10a2 2 0 001.7 3h12.6a2 2 0 001.7-3L15 8V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-primary" />
      <path d="M5 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="stroke-primary" />
    </svg>
  );
}

function NodeJsIcon() {
  return (
    <svg viewBox="0 0 128 128" className="size-8">
      <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.71 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645 1.281 1.248 1.281h5.731c.342 0 .727-.249.951-.551.226-.303.248-.7.199-1.078-1.141-10.502-9.15-15.421-21.97-15.421-12.583 0-20.07 5.316-20.07 14.236 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z" />
    </svg>
  );
}

function RestApiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" className="stroke-primary" />
      <path d="M2 17l10 5 10-5" className="stroke-primary" />
      <path d="M2 12l10 5 10-5" className="stroke-primary" />
    </svg>
  );
}

function ElasticsearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" className="stroke-primary" />
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" className="stroke-primary" />
      <path d="M7 8h10" stroke="currentColor" strokeWidth="1.5" className="stroke-primary" />
      <path d="M7 16h10" stroke="currentColor" strokeWidth="1.5" className="stroke-primary" />
    </svg>
  );
}

function MicroservicesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="6" r="2" className="stroke-primary" />
      <circle cx="18" cy="6" r="2" className="stroke-primary" />
      <circle cx="6" cy="18" r="2" className="stroke-primary" />
      <circle cx="18" cy="18" r="2" className="stroke-primary" />
      <circle cx="12" cy="12" r="2" className="stroke-primary" />
      <path d="M7.5 7.5l3 3M13.5 13.5l3 3M16.5 7.5l-3 3M7.5 16.5l3-3" className="stroke-primary" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 128 128" className="size-8">
      <path fill="#F34F29" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0l-11.44 11.44 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.462 6.607 2.293 9.993L87.46 55.557c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.578 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.906 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00.004-11.501z" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 128 128" className="size-8">
      <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5H73.8z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M60.5 50.8h11.3v11.5H60.5z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M47.2 50.8h11.3v11.5H47.2z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M33.9 50.8h11.3v11.5H33.9z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M60.5 38.3h11.3v11.5H60.5z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M47.2 38.3h11.3v11.5H47.2z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M33.9 38.3h11.3v11.5H33.9z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M47.2 25.8h11.3v11.5H47.2z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M60.5 25.8h11.3v11.5H60.5z" />
      <path fill="#3A4D54" d="M123.3 56.4c-2.4-1.6-7.9-2.2-12.1-1.4-1.1-8.6-7.5-12.8-7.8-13l-1.6-1-1.1 1.5c-1.4 2.1-2.4 4.5-2.8 7-.8 4.8.2 9.3 2.7 13.1-4 2.2-10.5 2.8-11.8 2.8H2.7c-1.5 0-2.7 1.2-2.7 2.7 0 16.2 8.8 36.4 25.2 47.4 12 8.1 28.1 12.2 47.6 12.2 36.8 0 64.1-17 77.2-47.8 5-0.2 10.1 0 13.4-6.3l.7-1.3-1.1-.7c-3.2-2.1-10.5-2.9-16.1-1.8l.4.1z" />
    </svg>
  );
}

function KubernetesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none">
      <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" stroke="#326CE5" strokeWidth="1.5" />
      <circle cx="12" cy="11" r="3" stroke="#326CE5" strokeWidth="1.5" />
    </svg>
  );
}

function JenkinsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none">
      <circle cx="12" cy="12" r="10" fill="#D33833" />
      <text x="7" y="17" fontSize="12" fontWeight="bold" fill="white">{"J"}</text>
    </svg>
  );
}

function GithubActionsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" className="stroke-primary" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" className="stroke-primary" />
    </svg>
  );
}

function AwsIcon() {
  return (
    <svg viewBox="0 0 128 128" className="size-8">
      <path fill="#F7A80D" d="M38.089 77.466l-11.4 4.896 10.559 4.514 12.245-4.514zm-2.98-7.321l-12.58 5.3-1.2.577 12.85 5.494 14.18-5.228zm64.032 7.321l-11.399 4.896 10.558 4.514 12.245-4.514zm-2.981-7.321l-12.58 5.3-1.2.577 12.85 5.494 14.18-5.228zM64 45.932l-12.245 4.514L64 55.344l12.245-4.898zm-2.981-7.316L48.44 43.916l-1.2.577L60.089 50l14.18-5.228z" />
      <path fill="#F7A80D" d="M64 78.565l-12.245 4.514L64 87.993l12.245-4.914zm-2.981-7.321l-12.58 5.3-1.2.577L60.089 82.6l14.18-5.228z" />
    </svg>
  );
}

function MySqlIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none">
      <ellipse cx="12" cy="7" rx="8" ry="3" stroke="#00758F" strokeWidth="1.5" />
      <path d="M4 7v5c0 1.657 3.582 3 8 3s8-1.343 8-3V7" stroke="#00758F" strokeWidth="1.5" />
      <path d="M4 12v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="#00758F" strokeWidth="1.5" />
    </svg>
  );
}

function PostgreSqlIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none">
      <path d="M12 2C7 2 4 5 4 9v3c0 4 3 7 8 10 5-3 8-6 8-10V9c0-4-3-7-8-7z" stroke="#336791" strokeWidth="1.5" />
      <circle cx="12" cy="9" r="2" stroke="#336791" strokeWidth="1.5" />
      <path d="M12 14v3" stroke="#336791" strokeWidth="1.5" />
    </svg>
  );
}

function MongoDbIcon() {
  return (
    <svg viewBox="0 0 128 128" className="size-8">
      <path fillRule="evenodd" clipRule="evenodd" fill="#439934" d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-9.188-8.856-16.762-16.044-23.18-4.2-3.67-7.588-7.86-10.174-12.715C58.747 2.88 56.88.512 56.154.42c-.725 0-1.126-.012-1.368.014-.24.024-.485.19-.485.19l.014.124C52.86 5.59 51.282 9.43 49.1 13.07c-5.888 9.86-12.96 18.47-19.652 27.452-3.9 5.222-6.608 11.044-7.934 17.494-1.82 8.958-.608 17.622 3.38 25.862 3.676 7.578 9.302 13.494 16.704 17.712 6.598 3.74 13.694 5.732 21.264 5.726 7.536-.006 14.608-2.02 21.14-5.82 9.548-5.552 15.91-13.484 19.136-23.862 2.282-7.332 2.07-14.756-.644-22.352z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="#45A538" d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-9.188-8.856-16.762-16.044-23.18-4.2-3.67-7.588-7.86-10.174-12.715-1.468-2.67-2.662-5.078-3.2-6.318l-.182-.27-.027.01v.004l-.014.006v78.748c.042.972.188 1.94.476 2.872 1.034 3.378 3.488 5.47 6.824 6.35 3.394.9 6.656.578 9.752-1.004 5.052-2.58 8.16-6.79 9.946-11.994 2.282-7.332 2.07-14.756-.644-22.352-.251-.776-.445-1.566-.6-2.366l.002.143-.053-.003z" />
    </svg>
  );
}

function OracleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none">
      <rect x="2" y="8" width="20" height="8" rx="4" stroke="#F80000" strokeWidth="1.5" />
      <text x="5.5" y="14.5" fontSize="6" fontWeight="bold" fill="#F80000">{"ORA"}</text>
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C9 2 7 5 7 9c0 2 .5 3.5 1 5-2 1-4 3-4 5h16c0-2-2-4-4-5 .5-1.5 1-3 1-5 0-4-2-7-5-7z" className="stroke-primary" />
      <circle cx="10" cy="8" r="1" fill="currentColor" className="fill-primary" />
      <circle cx="14" cy="8" r="1" fill="currentColor" className="fill-primary" />
      <path d="M10 11c0 0 1 2 2 2s2-2 2-2" className="stroke-primary" />
    </svg>
  );
}

function PostmanIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CiCdIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12a8 8 0 0114.5-4.5" className="stroke-primary" />
      <path d="M20 12a8 8 0 01-14.5 4.5" className="stroke-primary" />
      <polyline points="15 3 19 7.5 15 7.5" className="stroke-primary" />
      <polyline points="9 21 5 16.5 9 16.5" className="stroke-primary" />
    </svg>
  );
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <PythonIcon /> },
      { name: "Java", icon: <JavaIcon /> },
      { name: "SQL", icon: <SqlIcon /> },
      { name: "JavaScript", icon: <JavaScriptIcon /> },
      { name: "Go", icon: <GoIcon /> },
      { name: "Perl", icon: <PerlIcon /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", icon: <SpringBootIcon /> },
      { name: "Flask", icon: <FlaskIcon /> },
      { name: "Node.js", icon: <NodeJsIcon /> },
      { name: "REST APIs", icon: <RestApiIcon /> },
      { name: "Elasticsearch", icon: <ElasticsearchIcon /> },
      { name: "Microservices", icon: <MicroservicesIcon /> },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git", icon: <GitIcon /> },
      { name: "Docker", icon: <DockerIcon /> },
      { name: "Kubernetes", icon: <KubernetesIcon /> },
      { name: "Jenkins", icon: <JenkinsIcon /> },
      { name: "GitHub Actions", icon: <GithubActionsIcon /> },
      { name: "AWS", icon: <AwsIcon /> },
      { name: "MySQL", icon: <MySqlIcon /> },
      { name: "PostgreSQL", icon: <PostgreSqlIcon /> },
      { name: "MongoDB", icon: <MongoDbIcon /> },
      { name: "Oracle", icon: <OracleIcon /> },
      { name: "Linux", icon: <LinuxIcon /> },
      { name: "Postman", icon: <PostmanIcon /> },
      { name: "CI/CD", icon: <CiCdIcon /> },
    ],
  },
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" label="Skills">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Skills</SectionHeading>
        <div className="flex flex-col gap-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-foreground mb-6 font-mono">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-xs text-muted-foreground font-medium text-center leading-tight group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
