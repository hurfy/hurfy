import {format} from 'date-fns'
import image from '../../utils/image.base64'
import ua from 'universal-analytics'

export default async (req, res) => {
    ua('UA-76312016-3').pageview("/api").send()

    res.statusCode = 200
    res.setHeader('Content-Type', 'image/svg+xml')
    res.setHeader('Cache-Control', 'max-age=3600');

    res.end(/* html */`
        <svg version="1.1"
            height="560"
            width="100%"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1680 560">

            <defs>
                <rect id="rect" x="0" y="0" width="1680" height="100%" rx="6" ry="6"/>
                <clipPath id="clip">
                    <use xlink:href="#rect"/>
                </clipPath>
                <style type="text/css"><![CDATA[
                    .text { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,Apple Color Emoji,Segoe UI Emoji; }
                ]]></style>
            </defs>

            <image
                id="image"
                height="100%"
                clip-path="url(#clip)"
                xlink:href="data:image/gif;base64,${image}"
                style="opacity: 1 !important"
            />

            <!-- <rect x="0" y="135" width="380" height="100" fill="black"/> -->
            <!-- <rect x="16" y="185" width="380" height="23" fill="black"/> -->
            <!-- <rect x="115" y="185" width="180" height="23" fill="white"/> -->

            <text class="text" x="50%" y="240" text-anchor="middle" font-size="64px" style="opacity: 0; text-shadow: 0 0 20px rgba(0, 0, 0, 0.7)" fill="#fff" font-weight="bold" id="name_d1">
                Hi there👋
            </text>
            <text class="text" x="50%" y="296" text-anchor="middle" font-size="36px" style="opacity: 0" fill="#fff" id="name_d2">
                My name is Ilya Grobovskikh!
            </text>
            <text class="text" x="50%" y="340" text-anchor="middle" font-size="36px" style="opacity: 0" fill="#fff" id="name_d3">
                I do software engineering!
            </text>

            <text class="text" x="30" y="42" font-size="24px" fill="#fff" style="text-shadow: 0 0 20px rgba(0, 0, 0, 0.7)">${format(new Date(), "iii, MMM. do, yyy")}</text>

            <animate xlink:href="#name_d1" attributeType="CSS" attributeName="opacity" from="0" begin="3.7s" to="100" dur="0.1s" repeatCount="1" fill="freeze" />
            <animate xlink:href="#name_d2" attributeType="CSS" attributeName="opacity" from="0" begin="6s" to="1" dur="1s" repeatCount="1" fill="freeze"  />
            <animate xlink:href="#name_d3" attributeType="CSS" attributeName="opacity" from="0" begin="6s" to="1" dur="1s" repeatCount="1" fill="freeze"  />
        </svg>
    `)
}