import {format} from 'date-fns'
import image from '../../utils/image.base64'
import ua from 'universal-analytics'

export default async (req, res) => {
    ua('UA-76312016-3').pageview("/api").send()

    res.statusCode = 200
    res.setHeader('Content-Type', 'image/svg+xml')
    res.setHeader('Cache-Control', 'max-age=3600')
    res.end(/* html */`
        <svg version="1.1"
            baseProfile="full"
            height="231"
            max-width="1680"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

            <defs>
                <rect id="rect" x="0" y="0" width="1680" height="99%" rx="6"/>
                <clipPath id="clip">
                    <use xlink:href="#rect"/>
                </clipPath>
                <style type="text/css"><![CDATA[
                    .text { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,Apple Color Emoji,Segoe UI Emoji; }
                ]]></style>
            </defs>

            <image
                id="image"
                width="100%"
                height="100%"
                clip-path="url(#clip)"
                xlink:href="data:image/gif;base64,${image}"
                style="opacity: 1 !important"
            />

            <!-- <rect x="0" y="135" width="380" height="100" fill="black"/> -->
            <!-- <rect x="16" y="185" width="380" height="23" fill="black"/> -->
            <!-- <rect x="115" y="185" width="180" height="23" fill="white"/> -->

            <text class="text" x="50%" y="110" text-anchor="middle" font-size="32px" style="opacity: 0" font-weight="bold" fill="#fff" id="name_d1">
                Hi there👋
            </text>
            <text class="text" x="50%" y="138" text-anchor="middle" font-size="18px" style="opacity: 0" fill="#fff" id="name_d2">
                My name is Ilya Grobovskikh!
            </text>
            <text class="text" x="50%" y="160" text-anchor="middle" font-size="18px" style="opacity: 0" fill="#fff" id="name_d3">
                I do software engineering!
            </text>

            <animate xlink:href="#name_d1" attributeType="CSS" attributeName="opacity" from="0" begin="6.5s" to="1" dur="0.1s" repeatCount="1" fill="freeze"  />
            <animate xlink:href="#name_d2" attributeType="CSS" attributeName="opacity" from="0" begin="7.5s" to="1" dur="1s" repeatCount="1" fill="freeze"  />
            <animate xlink:href="#name_d3" attributeType="CSS" attributeName="opacity" from="0" begin="7.5s" to="1" dur="1s" repeatCount="1" fill="freeze"  />
        </svg>
    `)
}