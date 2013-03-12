import webapp2
from jinja2 import Environment, PackageLoader, FileSystemLoader
import os


jinja_environment = Environment(
                 loader=FileSystemLoader('templates'))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('index.html')
        self.response.out.write(template.render())

app = webapp2.WSGIApplication([('/', MainHandler)],
                              debug=True
)
