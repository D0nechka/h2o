/* eslint-disable max-len */
import React from 'react';

export const ArwRight: React.FC<React.SVGProps<SVGSVGElement>> = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
        >
            <g filter="url(#filter0_d_2629_69)">
                <circle cx={38} cy={34} r={20} transform="rotate(-180 38 34)" fill="white"/>
            </g>
            <path
                d="M43.9833 34.3201L36.8008 42.9391C36.5014 43.2983 35.9167 43.0866 35.9167 42.619L35.9167 25.381C35.9167 24.9134 36.5014 24.7017 36.8008 25.0609L43.9833 33.6799C44.1378 33.8653 44.1378 34.1347 43.9833 34.3201Z"
                fill="#989FA3"
            />
            <defs>
                <filter
                    id="filter0_d_2629_69"
                    x="0"
                    y="0"
                    width="76"
                    height="76"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="9" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.823529 0 0 0 0 0.819608 0 0 0 0 0.819608 0 0 0 0.5 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2629_69" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2629_69" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};