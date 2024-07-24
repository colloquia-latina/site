# _plugins/generate_authors.rb
module Jekyll
    class AuthorPageGenerator < Generator
      safe true
  
      def generate(site)
        authors = site.collections["colloquia"].docs.map { |doc| doc.data["author"] }.compact.uniq
        authors.each do |author|
          site.pages << AuthorPage.new(site, site.source, "author", author)
        end
      end
    end
  
    class AuthorPage < Page
      def initialize(site, base, dir, author)
        @site = site
        @base = base
        @dir = dir
        @name = "#{author.slugify}.html"
  
        self.process(@name)
        self.read_yaml(File.join(base, '_layouts'), 'author.html')
        self.data['author'] = author
        self.data['title'] = "#{author}'s Colloquia"
      end
    end
  end
  