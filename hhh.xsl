<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
    <h2>sports management</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>reg_no</th>
        <th>sportname</th>
      </tr>
      <xsl:for-each select="SPORTS/PLAYERS">
        <tr>
          <td><xsl:value-of select="reg_no"/></td>
          <td><xsl:value-of select="sportname"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>