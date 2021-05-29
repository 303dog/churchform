import React from "react";
import "./Layout.css";

export default function Layout() {
  return (
    <div className='layout__container'>
      <article className='layout__article'>
        Thank you for choosing irononcarpetlabels.com!  We specialize in one product, carpet labels. We offer several different sizes in two different formats. Orders can be filled with either or a combination of our standard black & white/ grayscale format or our full-color format. We offer the ability to add your custom logos as well as custom size labels.
      </article>
      <article className='layout__article'>
        Heat Seal Adhesive Coatings Heat Activated adhesive coatings are also
        known as hot-melt coatings or thermo-sensitive coatings.
        Irononcarpetlabels.com can coat paper, textiles or a wide range of
        customer supplied substrates. Our precision equipment can deliver
        varying amounts of adhesive and various patterns imprinted in the
        adhesive depending on the needs of our customers. All products are
        uniform and flexible with an extended shelf life. They can be sold in
        rolls of varying widths and lengths, custom slitted or sheeted to fit
        your exact needs. While we welcome the opportunity to work closely with
        our customers to provide them with innovative, custom solutions,
        Irononcarpetlabels.com does provide a range of standard substrate
        options to fit a wide variety of manufacturing needs. These include
        <ul>
          <li>Irononcarpetlabels.com All Purpose Paper</li>
          <li>
            {" "}
            Irononcarpetlabels.com Printogo specially developed for use on
            Digital Presses
          </li>
          <li>
            {" "}
            Irononcarpetlabels.com Green, 100% recyclable and made from 50% post
            consumer paper
          </li>
          <li>Irononcarpetlabels.com RT Heat Seal</li>
          <li>Irononcarpetlabels.com All Purpose Fabric</li>
          <li>
            Irononcarpetlabels.com Apparel To learn how our heat seal adhesive
            coatings can give you a competitive edge, please contact us.
          </li>
        </ul>
      </article>
      <table id='product__application'>
        <tr id='product__tr'>
          <th id='product__th'> MARKET</th>
          <th id='product__th'> APPLICATION</th>
        </tr>
        <tr id='product__tr'>
          <td id='product__td2'> Apparel</td>
          <td id='product__td2'> Embroidery, applique attachment, Label</td>
        </tr>
        <tr id='product__tr'>
          <td id='product__td1'>Consumer Goods</td>
          <td id='product__td1'> Label attachment</td>
        </tr>
        <tr id='product__tr'>
          <td id='product__td2'>Furniture</td>
          <td id='product__td2'> Label attachment</td>
        </tr>
        <tr id='product__tr'>
          <td id='product__td1'>Textiles</td>
          <td id='product__td1'> Label attachments, non-fray applications</td>
        </tr>
        <tr id='product__tr'>
          <td id='product__td2'>Woodworking</td>
          <td id='product__td2'> Vinyl overlays</td>
        </tr>
      </table>
      <section className='layout__section'>
        EcoEffort At Irononcarpetlabels.com we appreciate the need for ourselves
        and our customers to be responsible members of our global community.
        That is why all of our EVA adhesives are environmentally benign and
        recycling compatible. In fact, our EVA adhesives are an environmentally
        safe alternative to many solvent and spray adhesives found in the
        market. We also can provide recyclable and recycled substrates. Not only
        does this help our environment, it helps our customers compete in the
        global marketplace. To learn how our EcoEffort can give your business a
        competitive edge, please contact us. General Technical Information
        Irononcarpetlabels.com both manufactures specialty adhesive coatings and
        coats specialty thermoplastic coatings onto substrates. Our products do
        not exhibit surface tack at room temperature like a pressure-sensitive
        label. They do not, therefore, require a laminate backing for storage. A
        heat seal label requires both heat and pressure to soften the adhesive,
        allowing it to penetrate the substrate. Upon cooling, this results in a
        stronger bond than is achievable with most pressure-sensitive labels.
        </section>
    </div>
  );
}
